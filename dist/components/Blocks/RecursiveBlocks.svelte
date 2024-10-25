<script lang="ts">
	import RecursiveBlocks from './RecursiveBlocks.svelte';
	import type { ContextedBlock } from '../../types';
	import { notionComponentProviderContext } from '../../context';
	interface Props {
		blocks: ContextedBlock[];
	}

	let { blocks }: Props = $props();
	const componentProvider = notionComponentProviderContext.get();
</script>

{#each blocks as block (block.id)}
	{@const SvelteComponent = componentProvider.resolve(block.type)}
	<SvelteComponent props={block}>
		{#if block.has_children === true}
			<RecursiveBlocks blocks={block.blocks} />
		{/if}
	</SvelteComponent>
{/each}
