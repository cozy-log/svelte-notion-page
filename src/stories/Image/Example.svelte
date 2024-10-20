<script lang="ts">
	import { json } from './notion-export';
	import type { Content } from '$lib/types.js';
	import Notion from '$lib/components';
	export let content = json as unknown as Content;
</script>

<Notion>
	<Notion.Body>
		<Notion.Title title="Image" />
		<Notion.Blocks blocks={content.blocks} />
	</Notion.Body>
</Notion>
