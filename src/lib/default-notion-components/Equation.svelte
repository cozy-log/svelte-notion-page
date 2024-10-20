<script lang="ts">
	import type { EquationArgs } from '$lib/types';
	import renderEquation from '$lib/utils/renderEquation';

	export let props: EquationArgs;
	const {
		equation: { expression }
	} = props;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
		integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="notion-block notion-equation notion-equation-block">
	{@html renderEquation(expression)}
</div>

<style>
	.notion-equation {
		position: relative;
		display: inline-flex;
		color: inherit;
		fill: inherit;
		user-select: none;
		border-radius: 3px;
		transition: background 20ms ease-in 0s;
	}

	.notion-equation-block {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		overflow: auto;
		padding: 16px 8px;
		margin: 2px 0;
		cursor: pointer;
	}

	.notion-equation:hover {
		background: var(--bg-color-0);
	}

	.notion-equation:active,
	.notion-equation:focus {
		background: var(--select-color-2);
	}
</style>
