<script lang="ts">
	import type { Content } from '$lib/types.js';
	import Notion from '$lib/components';
	interface Props {
		content: Content;
		title?: string;
	}

	let { content, title = 'Notion Title' }: Props = $props();
</script>

<Notion>
	<Notion.Body>
		<Notion.Title {title} />
		<Notion.Blocks blocks={content.blocks} />
	</Notion.Body>
</Notion>
