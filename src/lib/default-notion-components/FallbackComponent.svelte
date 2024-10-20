<script lang="ts">
	import type { Block } from '../types';

	export let block: Block;

	console.warn(`Fail to resolve ${block?.type}`);
</script>

<div>
	⚠️ Not implemented type
	<div>
		<slot />
	</div>
</div>
<!-- {@debug block} -->
