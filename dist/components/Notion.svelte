<script lang="ts">
  import './notion.css'
	import { defaultProvider } from '../NotionComponentProvider';
	import {  notionComponentProviderContext } from '../context';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	if (!notionComponentProviderContext.exist()) {
		notionComponentProviderContext.set(defaultProvider);
	}
</script>

<div class="notion">
  {@render children?.()}
</div>