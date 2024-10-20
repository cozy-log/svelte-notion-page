<script lang="ts">
	import type { Heading_2_Args } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_2_Args;
	const {
		heading_2: { color, rich_text: texts, is_toggleable }
	} = props;
	let open = false;

	// Give id to make it convenient to write TableOfContents
	export let id = texts.map(({ plain_text }) => plain_text).join('');
</script>

<div
	{id}
	class:notion-toggle-open={open}
	class={`${getColorCss(color)} notion-block notion-h2 notion-toggle`}
>
	{#if is_toggleable}
		<div class="notion-toggle-content">
			<button on:click={() => (open = !open)} class="notion-toggle-button">
				<div class:notion-toggle-button-arrow-opened={open} class="notion-toggle-button-arrow" />
			</button>
			<h2 class="notion-h-content notion-h2-content">
				<RichText props={texts} />
			</h2>
		</div>
		<slot />
	{:else}
		<h2 class="notion-h-content notion-h2-content">
			<RichText props={texts} />
		</h2>
	{/if}
</div>

<style>
	.notion-h2:not(:last-child) {
		margin-bottom: 2px;
	}

	.notion-h2:not(:first-child) {
		margin-top: 1.62rem;
	}

	.notion-h2-content {
		font-size: 1.5rem;
	}
</style>
