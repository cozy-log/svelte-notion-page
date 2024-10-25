<script lang="ts">
	import type { SyncedBlockArgs } from '$lib/types';
	interface Props {
		props: SyncedBlockArgs;
		children?: import('svelte').Snippet;
	}

	let { props, children }: Props = $props();
</script>

<div class="notion-block notion-synced-block">
	{@render children?.()}
</div>

<style>
	:global(.notion-block.notion-synced-block > .notion-block) {
		margin-left: 0px;
	}
</style>
