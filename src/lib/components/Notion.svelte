<script lang="ts">
  import './notion.css'
	import { defaultProvider } from '../NotionComponentProvider';
	import {  notionComponentProviderContext } from '../context';

	if (!notionComponentProviderContext.exist()) {
		notionComponentProviderContext.set(defaultProvider);
	}
</script>

<div class="notion">
  <slot/>
</div>