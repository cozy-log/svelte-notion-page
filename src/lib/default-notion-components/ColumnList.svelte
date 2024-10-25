<script lang="ts">
	import type { ColumnListArgs } from '$lib/types';
	interface Props {
		props: ColumnListArgs;
		children?: import('svelte').Snippet;
	}

	let { props, children }: Props = $props();
	const columnCount = props.blocks?.length || 0;
</script>

<!-- notion-column-list로 column count 전달 -->
<div style={`--notion-column-count: ${columnCount}`} class="notion-block notion-column-list">
	{@render children?.()}
</div>

<style>
	.notion-column-list {
		display: grid;
		display: grid;
		grid-template-columns: repeat(var(--notion-column-count), 1fr fit-content(0px));
	}

	@media (max-width: 640px) {
		.notion-column-list {
			display: flex;
			flex-direction: column;
		}

		:global(.notion-column-list .notion-column) {
			flex-grow: 1;
		}

		:global(.notion-column-list .notion-column-spacer) {
			display: none;
		}
	}
</style>
