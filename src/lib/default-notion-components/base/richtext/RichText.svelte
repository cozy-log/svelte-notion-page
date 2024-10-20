<script lang="ts">
	import type { TextArgs } from '$lib/types';
	import Text from './component/Text.svelte';
	import Equation from './component/Equation.svelte';
	export let props: TextArgs[];
	const configs = {
		text: Text,
		equation: Equation
	};
</script>

{#if props.length !== 0}
	{#each props as text}
		<svelte:component this={configs[text.type]} props={text} />
	{/each}
{:else}
	&nbsp
{/if}
