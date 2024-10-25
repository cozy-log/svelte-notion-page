<script lang="ts">
	import { run } from 'svelte/legacy';

	import type { ImageArgs, ContextedBlock } from '$lib/types';
	import RichText from '../base/richtext/RichText.svelte';
	import ImageViewer from './ImageViewer.svelte';

	const { image } = props;
	const { type, caption } = image;
	interface Props {
		style?: string;
		props: ImageArgs;
		convertUrl?: (url: string) => string;
		children?: import('svelte').Snippet;
	}

	let {
		style = '',
		props,
		convertUrl = (url) => url,
		children
	}: Props = $props();
	let opened = $state(false);
	const url = getImgUrlOrNull(props);
	let urls: string[] = $state(url ? [url] : []);
	let initialIndex = $state(0);
	let urlLoaded = $state(false);

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
	run(() => {
		// lazy load
		opened && !urlLoaded && loadImageUrlsEffect();
	});
</script>

<figure {style} class="notion-block notion-image">
	<div class="notion-image-content">
		{#if url}
			<ImageViewer bind:opened {initialIndex} {urls}>
				{#if children}{@render children()}{:else}
					<img src={url} alt="posting img" />
				{/if}
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
	.notion-image img {
		width: 100%;
		object-fit: contain;
		pointer-events: auto;
		cursor: default;
	}

	.notion-image:not(:last-child) {
		margin-bottom: 4px;
	}

	.notion-image:not(:first-child) {
		margin-top: 4px;
	}

	.notion-image-content {
		display: flex;
		flex-direction: column;
	}
</style>
