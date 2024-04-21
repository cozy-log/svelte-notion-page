<script lang="ts">
	import type { TableRowArgs } from '$lib/types';
	import RichText from './base/richtext/RichText.svelte';
	export let props: TableRowArgs;
	const {
		table_row: { cells }
	} = props;
</script>

<tr class="notion-table-row">
	{#each cells as cell}
		<td>
			<RichText props={cell} />
		</td>
	{/each}
</tr>

<style>
</style>
