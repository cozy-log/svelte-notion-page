<script lang="ts">
	import type { TodoArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	import CheckBox from './base/CheckBox.svelte';
	export let props: TodoArgs;

	const {
		to_do: { color, rich_text: texts, checked }
	} = props;
</script>

<div class={`notion-block notion-to-do ${getColorCss(color)}`}>
	<div aria-checked={checked} class:notion-to-do-checked={checked} class="notion-to-do-content">
		<div class="notion-to-do-checkbox">
			<CheckBox {checked} />
		</div>
		<p class="notion-to-do-text">
			<RichText props={texts} />
		</p>
	</div>
	<slot />
</div>

<style>
	.notion-to-do-content {
		display: flex;
	}

	.notion-to-do-checkbox {
		display: inline-block;
		padding: 8px 6px;
	}

	.notion-to-do-text {
		padding: 3px 2px;
	}

	.notion-to-do-checked .notion-to-do-text {
		text-decoration: line-through;
		opacity: 0.6;
	}
</style>
