<script lang="ts">
	import type { TableArgs } from '$lib/types';
	export let props: TableArgs;
	const {
		table: { has_column_header, has_row_header }
	} = props;
</script>

<table class="notion-block notion-table">
	<tbody
		class="notion-table-content"
		class:has-column-header={has_column_header}
		class:has-row-header={has_row_header}
	>
		<slot />
	</tbody>
</table>

<style>
	.notion-table-content {
		width: 100%;
		overflow-x: visible;
		border-collapse: collapse;
		border-spacing: 0;
		font-size: 14px;
		padding-bottom: 12px;
	}

	:global(.notion-table-content.has-column-header tr:first-child td) {
		background: var(--bg-color-1);
	}

	:global(.notion-table-content.has-row-header tr td:first-child) {
		background: var(--bg-color-1);
	}

	.notion-table:not(:first-child) {
		margin-top: 8px;
	}

	.notion-table:not(:last-child) {
		margin-bottom: 4px;
	}
</style>
