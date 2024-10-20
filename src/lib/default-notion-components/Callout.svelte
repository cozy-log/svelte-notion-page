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

<style>
	.notion-callout {
		padding: 16px 16px 16px 12px;
		margin-top: 4px;
		margin-bottom: 4px;
		border-radius: 3px;
	}

	.notion-callout-outline {
		border: 1px solid var(--fg-color-0);
	}

	.notion-callout-content {
		display: flex;
	}

	:global(.notion-block + .notion-callout > .notion-block) {
		margin-left: calc(var(--notion-indent) + 12px);
	}

	.notion-callout .notion-page-icon-inline {
		align-self: flex-start;
		width: 24px;
		height: 24px;
		line-height: 24px;
		font-size: 1.3em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.notion-callout-text {
		margin-left: 8px;
		word-break: break-word;
	}
</style>
