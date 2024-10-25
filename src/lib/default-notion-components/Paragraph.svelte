<script lang="ts">
	import type { ParagraphArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	interface Props {
		props: ParagraphArgs;
		children?: import('svelte').Snippet;
	}

	let { props, children }: Props = $props();
	const {
		paragraph: { color, rich_text: texts }
	} = props;
</script>

<div class={`notion-block ${getColorCss(color)}`}>
	<p class="notion-paragraph-content">
		<RichText props={texts} />
	</p>
	{@render children?.()}
</div>

<style>
	.notion-paragraph {
		margin-top: 0;
		margin-bottom: 0;
		margin-block-start: 0;
		margin-block-end: 0;
	}

	.notion-paragraph-content {
		padding: 3px 2px;
	}
</style>
