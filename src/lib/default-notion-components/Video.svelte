<script lang="ts">
	import type { VideoArgs } from '$lib/types';
	import RichText from './base/richtext/RichText.svelte';
	import { getYoutubeId } from '$lib/utils/getYoutubeId';

	export let props: VideoArgs;
	const {
		video: { type, file, external, caption }
	} = props;
</script>

<div class="notion-block notion-video">
	<div class="notion-video-content">
		{#if type === 'file' && file != null}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video playsInline controls preload="metadata" src={file.url} />
		{:else if type === 'external' && external != null}
			<!-- svelte-ignore a11y-media-has-caption -->
			{@const youtubeId = getYoutubeId(external.url)}

			{#if youtubeId}
				<iframe
					style="width: 100%; aspect-ratio: 560 / 315;"
					src="https://www.youtube.com/embed/{youtubeId}"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			{:else}
				unsupported embeded video
			{/if}
		{:else}
			unsupported video
		{/if}
	</div>
	{#if caption.length !== 0}
		<div class="notion-asset-caption">
			<RichText props={caption} />
		</div>
	{/if}
</div>

<style>
	.notion-video:not(:last-child) {
		margin-bottom: 4px;
	}

	.notion-video:not(:first-child) {
		margin-top: 4px;
	}

	.notion-video-content {
		display: flex;
		flex-direction: column;
	}

	.notion-video-content video {
		width: 100%;
		border-radius: 2px;
		margin: 0 auto;
	}
</style>
