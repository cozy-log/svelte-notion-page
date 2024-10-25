<script lang="ts">
	import type { ToggleArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	interface Props {
		props: ToggleArgs;
		children?: import('svelte').Snippet;
	}

	let { props, children }: Props = $props();
	const {
		toggle: { color, rich_text: texts }
	} = props;
	let open = $state(false);
</script>

<div
	class:notion-toggle-open={open}
	aria-expanded={open}
	class={`${getColorCss(color)} notion-block notion-h1 notion-toggle`}
>
	<div class="notion-toggle-content">
		<button onclick={() => (open = !open)} class="notion-toggle-button">
			<div class:notion-toggle-button-arrow-opened={open} class="notion-toggle-button-arrow"></div>
		</button>
		<p>
			<RichText props={texts} />
		</p>
	</div>
	{@render children?.()}
</div>

<style>
	.notion-toggle-content > p {
		padding: 3px 2px;
	}
</style>
