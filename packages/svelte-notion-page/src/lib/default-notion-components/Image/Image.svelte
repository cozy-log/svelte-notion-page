<script lang="ts">
	import type { ImageArgs, ContextedBlock } from '$lib/types';
	import RichText from '../base/richtext/RichText.svelte';
	import ImageViewer from './ImageViewer.svelte';

	export let style = '';
	export let props: ImageArgs;
	const { image } = props;
	const { type, caption } = image;
	export let convertUrl: (url: string) => string = (url) => url;
	const url = getImgUrlOrNull(props);
	let urls: string[] = url ? [url] : [];
	let initialIndex = 0;
	let urlLoaded = false;
	let opened = false;
	$: {
		// lazy load
		opened && !urlLoaded && loadImageUrlsEffect();
	}

	function loadImageUrlsEffect() {
		if (!url) return;
		urlLoaded = true;
		urls = [];

		let startBlock: ContextedBlock = props;
		while (startBlock.context.parent != null) {
			startBlock = startBlock.context.parent;
		}
		while (startBlock.context.previous != null) {
			startBlock = startBlock.context.previous;
		}

		extract(startBlock);

		initialIndex = urls.findIndex((data) => data === url);

		function extract(block: ContextedBlock) {
			const imagUrl = getImgUrlOrNull(block);
			if (imagUrl) {
				urls = [...urls, imagUrl];
			}
			block.blocks.forEach(extract);
			block.context.after && extract(block.context.after);
		}
	}

	function getImgUrlOrNull(block: ContextedBlock): string | null {
		if (block.type !== 'image') return null;
		const { image } = block;
		const { url } =
			image.type === 'file' ? image.file : type === 'external' ? image.external : { url: null };
		return url && convertUrl(url);
	}
</script>

<figure {style} class="notion-block notion-image">
	<div class="notion-image-content">
		{#if url}
			<ImageViewer bind:opened {initialIndex} {urls}>
				<slot>
					<img src={url} alt="posting img" />
				</slot>
			</ImageViewer>
		{:else}
			unsupported type: ${type}
		{/if}
	</div>
	{#if caption.length !== 0}
		<figcaption class="notion-asset-caption">
			<RichText props={caption} />
		</figcaption>
	{/if}
</figure>

<style>
</style>
