<script lang="ts">
	import { json } from './notion-export';
	import type { Content } from '$lib/types.js';
	import Notion from '$lib/components';
	import { defaultComponents, NotionComponentProvider, notionComponentProviderContext } from '$lib';
	import BookMark from './BookMark.svelte';
	const content = json as unknown as Content;

	notionComponentProviderContext.set(
		new NotionComponentProvider({
			...defaultComponents,
			bookmark: BookMark
		})
	);
</script>

<Notion>
	<Notion.Body>
		<Notion.Title title="Bookmark" />
		<Notion.Blocks blocks={content.blocks} />
	</Notion.Body>
</Notion>
