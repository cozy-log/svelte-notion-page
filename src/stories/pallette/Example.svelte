<script lang="ts">
	import { json } from './notion-export';
	import type { Content } from '$lib/types.js';
	import Notion from '$lib/components';
	const content = json as unknown as Content;
	export let theme: 'light' | 'dark' = 'light';
</script>

<div style="background-color: {theme === 'light' ? 'white' : 'black'};" data-theme={theme}>
	<Notion>
		<Notion.Body>
			<Notion.Title title="Colors used within Notion" />
			<Notion.Blocks blocks={content.blocks} />
		</Notion.Body>
	</Notion>
</div>
