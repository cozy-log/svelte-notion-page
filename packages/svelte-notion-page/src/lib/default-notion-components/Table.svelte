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
</style>
