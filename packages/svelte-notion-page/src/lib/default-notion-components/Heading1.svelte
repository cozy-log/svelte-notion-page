<script lang="ts">
	import type { Heading_1_Args } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_1_Args;
	const {
		heading_1: { color, rich_text: texts, is_toggleable }
	} = props;
	let open = false;

	// Give id to make it convenient to write TableOfContents
	export let id = texts.map(({ plain_text }) => plain_text).join('');
</script>

<div
	{id}
	class:notion-toggle-open={open}
	class={`${getColorCss(color)} notion-block notion-h1 notion-toggle`}
>
	{#if is_toggleable}
		<div class="notion-toggle-content">
			<button on:click={() => (open = !open)} class="notion-toggle-button">
				<div class:notion-toggle-button-arrow-opened={open} class="notion-toggle-button-arrow" />
			</button>
			<h1 class="notion-h-content notion-h1-content">
				<RichText props={texts} />
			</h1>
		</div>
		<slot />
	{:else}
		<h1 class="notion-h-content notion-h1-content">
			<RichText props={texts} />
		</h1>
	{/if}
</div>
