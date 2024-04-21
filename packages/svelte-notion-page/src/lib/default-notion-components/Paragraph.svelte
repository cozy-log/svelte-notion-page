<script lang="ts">
	import type { ParagraphArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: ParagraphArgs;
	const {
		paragraph: { color, rich_text: texts }
	} = props;
</script>

<div class={`notion-block notion-paragraph ${getColorCss(color)}`}>
	<p class="notion-paragraph-content">
		<RichText props={texts} />
	</p>
	<slot />
</div>

<style>
</style>
