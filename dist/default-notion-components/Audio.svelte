<script lang="ts">
	import type { AudioArgs } from '../types';
	import RichText from './base/richtext/RichText.svelte';

	interface Props {
		props: AudioArgs;
	}

	let { props }: Props = $props();
	const {
		audio: { type, file, external, caption }
	} = props;
</script>

<div class="notion-block notion-audio">
	<div class="notion-audio-content">
		{#if type === 'file' && file != null}
			<!-- svelte-ignore a11y_media_has_caption -->
			<audio controls preload="none" src={file.url}></audio>
		{:else if type === 'external' && external != null}
			unsupported embeded audio
		{:else}
			unsupported audio
		{/if}
	</div>
	{#if caption.length !== 0}
		<div class="notion-asset-caption">
			<RichText props={caption} />
		</div>
	{/if}
</div>
