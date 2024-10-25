<script lang="ts">
	import type { Content } from '$lib/types.js';
	import Notion from '$lib/components';
	interface Props {
		content: Content;
		theme?: 'light' | 'dark';
	}

	let { content, theme = 'light' }: Props = $props();
</script>

<div style="background-color: {theme === 'light' ? 'white' : 'black'};" data-theme={theme}>
	<Notion>
		<Notion.Body>
			<Notion.Title
				title={content.properties.title.type === 'title'
					? content.properties.title.title[0].plain_text
					: ''}
			/>
			<Notion.Blocks blocks={content.blocks} />
		</Notion.Body>
	</Notion>
</div>
