<script lang="ts">
	import { json } from './notion-export';
	import type { Content } from '$lib/types.js';
	import Notion from '$lib/components';
	const content = json as unknown as Content;
</script>

<Notion>
	<Notion.Cover src="https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk.jpg" />
	<Notion.Body>
		<Notion.Title title="Notion Title" />
		<Notion.Blocks blocks={content.blocks} />
	</Notion.Body>
</Notion>
