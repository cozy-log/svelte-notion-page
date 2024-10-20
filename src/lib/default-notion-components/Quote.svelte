<script lang="ts">
	import type { QuoteArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';

	export let props: QuoteArgs;
	const {
		quote: { color, rich_text: texts }
	} = props;
</script>

<div class={`notion-block notion-quote ${getColorCss(color)}`}>
	<div class="notion-quote-content">
		<p>
			<RichText props={texts} />
		</p>
		<slot />
	</div>
</div>

<style>
	.notion-quote-content {
		display: block;
		word-break: break-word;
		padding-left: 14px;
		padding-right: 14px;
		border-left: 3px solid currentcolor;
	}
	.notion-quote {
		padding: 3px 2px;
		margin: 3px 0px 3px 1px;
		font-size: 1em;
	}
</style>
