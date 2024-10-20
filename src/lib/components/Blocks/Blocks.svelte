<script lang="ts">
	import type { Block, ContextedBlock } from '$lib/types';
	import RecursiveBlocks from './RecursiveBlocks.svelte';
	export let blocks: Block[];

	function resolveToContextedBlock(
		block: Block,
		previous: ContextedBlock | null = null,
		parent: ContextedBlock | null = null
	): ContextedBlock {
		const { blocks: children } = block;
		const thisBlock: ContextedBlock = {
			...block,
			blocks: [],
			context: { previous, parent }
		};
		if (children == null) return thisBlock;

		const childContextBlocks = [] as ContextedBlock[];

		let previousChildBlock: ContextedBlock | null = null;

		children.forEach((child, i) => {
			const contextChildBlock = resolveToContextedBlock(child, previousChildBlock, thisBlock);
			childContextBlocks[i] = contextChildBlock;
			previousChildBlock = contextChildBlock;
		});

		thisBlock.blocks = childContextBlocks;

		return thisBlock;
	}

	function resolveToContextedBlocks(blocks: Block[]) {
		const contextedBlocks = blocks.map((block) => resolveToContextedBlock(block, null, null));
		contextedBlocks.forEach((current, i) => {
			if (i !== 0) {
				current.context.previous = contextedBlocks[i - 1];
			}
			if (i < contextedBlocks.length - 1) {
				current.context.after = contextedBlocks[i + 1];
			}
		});
		return contextedBlocks;
	}
	let contextedBlocks = resolveToContextedBlocks(blocks);
	$: {
		[blocks];
		reactive();
	}
	function reactive() {
		contextedBlocks = resolveToContextedBlocks(blocks);
	}
</script>

<RecursiveBlocks blocks={contextedBlocks} />
