<script lang="ts">
	import type { TableRowArgs } from '../types';
	import RichText from './base/richtext/RichText.svelte';
	interface Props {
		props: TableRowArgs;
	}

	let { props }: Props = $props();
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
	.notion-table-row td {
		border: 1px solid var(--fg-color-5);
		width: 120px;
		min-width: 120px;
		padding: 7px 9px;
		white-space: pre-wrap;
		word-break: break-word;
		font-size: 14px;
		line-height: 20px;
		caret-color: rgb(55, 53, 47);
	}
</style>
