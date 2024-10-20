<script lang="ts">
	import type { ColumnListArgs } from '$lib/types';
	export let props: ColumnListArgs;
	const columnCount = props.blocks?.length || 0;
</script>

<!-- notion-column-list로 column count 전달 -->
<div style={`--notion-column-count: ${columnCount}`} class="notion-block notion-column-list">
	<slot />
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
