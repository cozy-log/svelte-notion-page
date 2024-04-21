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
</style>
