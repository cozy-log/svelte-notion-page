<script lang="ts">
	import type { TextArgs } from '../../../types';
	import Text from './component/Text.svelte';
	import Equation from './component/Equation.svelte';
	interface Props {
		props: TextArgs[];
	}

	let { props }: Props = $props();
	const configs = {
		text: Text,
		equation: Equation
	};
</script>

{#if props.length !== 0}
	{#each props as text}
		{@const SvelteComponent = configs[text.type]}
		<SvelteComponent props={text} />
	{/each}
{:else}
	&nbsp
{/if}
