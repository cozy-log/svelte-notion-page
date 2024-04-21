<script lang="ts">
	import type { ColumnListArgs } from '$lib/types';
	export let props: ColumnListArgs;
	const columnCount = props.blocks?.length || 0;
</script>

<!-- notion-column-list로 column count 전달 -->
<div style={`--notion-column-count: ${columnCount}`} class="notion-block notion-column-list">
	<slot />
</div>
