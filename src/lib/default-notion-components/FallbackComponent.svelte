<script lang="ts">
	import type { Block } from '../types';

	interface Props {
		block: Block;
		children?: import('svelte').Snippet;
	}

	let { block, children }: Props = $props();

	console.warn(`Fail to resolve ${block?.type}`);
</script>

<div>
	⚠️ Not implemented type
	<div>
		{@render children?.()}
	</div>
</div>
<!-- {@debug block} -->
