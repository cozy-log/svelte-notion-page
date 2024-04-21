<script lang="ts">
	import type { ToggleArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: ToggleArgs;
	const {
		toggle: { color, rich_text: texts }
	} = props;
	let open = false;
</script>

<div
	class:notion-toggle-open={open}
	aria-expanded={open}
	class={`${getColorCss(color)} notion-block notion-h1 notion-toggle`}
>
	<div class="notion-toggle-content">
		<button on:click={() => (open = !open)} class="notion-toggle-button">
			<div class:notion-toggle-button-arrow-opened={open} class="notion-toggle-button-arrow" />
		</button>
		<p>
			<RichText props={texts} />
		</p>
	</div>
	<slot />
</div>