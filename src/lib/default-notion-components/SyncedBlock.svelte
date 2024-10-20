<script lang="ts">
	import type { SyncedBlockArgs } from '$lib/types';
	export let props: SyncedBlockArgs;
</script>

<div class="notion-block notion-synced-block">
	<slot />
</div>

<style>
	:global(.notion-block.notion-synced-block > .notion-block) {
		margin-left: 0px;
	}
</style>
