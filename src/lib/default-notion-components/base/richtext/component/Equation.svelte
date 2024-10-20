<script lang="ts">
	import type { EquationArgs } from '$lib/types';
	export let props: EquationArgs;
	import renderEquation from '$lib/utils/renderEquation';
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

<span class="notion-equation notion-equation-inline">
	{@html renderEquation(expression)}
</span>

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

	.notion-equation-inline {
		-webkit-user-select: all;
		-moz-user-select: all;
		user-select: all;
	}

	.notion-equation:hover {
		background: var(--bg-color-0);
	}

	.notion-equation:active,
	.notion-equation:focus {
		background: var(--select-color-2);
	}
</style>
