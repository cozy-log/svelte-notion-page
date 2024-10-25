<script lang="ts">
	import type { Heading_1_Args } from '../types';
	import { getColorCss } from '../utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	const {
		heading_1: { color, rich_text: texts, is_toggleable }
	} = props;
	let open = $state(false);

	
	interface Props {
		props: Heading_1_Args;
		// Give id to make it convenient to write TableOfContents
		id?: any;
		children?: import('svelte').Snippet;
	}

	let { props, id = texts.map(({ plain_text }) => plain_text).join(''), children }: Props = $props();
</script>

<div
	{id}
	class:notion-toggle-open={open}
	class={`${getColorCss(color)} notion-block notion-h1 notion-toggle`}
>
	{#if is_toggleable}
		<div class="notion-toggle-content">
			<button onclick={() => (open = !open)} class="notion-toggle-button">
				<div class:notion-toggle-button-arrow-opened={open} class="notion-toggle-button-arrow"></div>
			</button>
			<h1 class="notion-h-content notion-h1-content">
				<RichText props={texts} />
			</h1>
		</div>
		{@render children?.()}
	{:else}
		<h1 class="notion-h-content notion-h1-content">
			<RichText props={texts} />
		</h1>
	{/if}
</div>

<style>
	.notion-toggle-h1 {
		margin-bottom: 2px;
	}

	.notion-h1:not(:last-child) {
		margin-bottom: 2px;
	}

	.notion-h1:not(:first-child) {
		margin-top: 2.025rem;
	}

	.notion-h1-content {
		font-size: 1.875rem;
	}
</style>
