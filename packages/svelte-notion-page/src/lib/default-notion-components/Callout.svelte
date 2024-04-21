<script lang="ts">
	import type { CalloutArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: CalloutArgs;
	const {
		callout: { color, rich_text: texts, icon }
	} = props;
</script>

<div
	class:notion-callout-outline={!getColorCss(color).includes('background')}
	class={`notion-block notion-callout ${getColorCss(color)}`}
>
	<div class="notion-callout-content">
		<div class="notion-page-icon-inline">
			{#if icon.type === 'emoji' && icon.emoji != null}
				<span>{icon.emoji}</span>
			{:else if icon.type === 'external' && icon.external != null}
				<img alt="callout-icon" src={icon.external.url} />
			{:else if icon.type === 'file' && icon.file != null}
				<img alt="callout-icon" src={icon.file.url} />
			{:else}
				<span />
			{/if}
		</div>
		<p class="notion-callout-text">
			<RichText props={texts} />
		</p>
	</div>

	<slot />
</div>

