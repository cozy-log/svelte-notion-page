<script lang="ts">
	import type { Heading_3_Args } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	const {
		heading_3: { color, rich_text: texts, is_toggleable }
	} = props;
	let open = $state(false);

	
	interface Props {
		props: Heading_3_Args;
		// Give id to make it convenient to write TableOfContents
		id?: any;
		children?: import('svelte').Snippet;
	}

	let { props, id = texts.map(({ plain_text }) => plain_text).join(''), children }: Props = $props();
</script>

<div
	{id}
	class:notion-toggle-open={open}
	class={`${getColorCss(color)} notion-block notion-h3 notion-toggle`}
>
	{#if is_toggleable}
		<div class="notion-toggle-content">
			<button onclick={() => (open = !open)} class="notion-toggle-button">
				<div class:notion-toggle-button-arrow-opened={open} class="notion-toggle-button-arrow"></div>
			</button>
			<h3 class="notion-h-content notion-h3-content">
				<RichText props={texts} />
			</h3>
		</div>
		{@render children?.()}
	{:else}
		<h3 class="notion-h-content notion-h3-content">
			<RichText props={texts} />
		</h3>
	{/if}
</div>

<style>
	summary::marker {
		font-size: 1rem;
	}

	.notion-h3:not(:last-child) {
		margin-bottom: 2px;
	}

	.notion-h3:not(:first-child) {
		margin-top: 1.25rem;
	}

	.notion-h3-content {
		font-size: 1.25rem;
	}
</style>
