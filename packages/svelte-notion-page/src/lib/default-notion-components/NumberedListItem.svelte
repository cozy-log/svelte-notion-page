<script lang="ts">
	import type { NumberedListItemArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { numberedListItemMarker } from '$lib/utils/listItemMarker';
	import RichText from './base/richtext/RichText.svelte';

	export let props: NumberedListItemArgs;
	const {
		numbered_list_item: { rich_text: texts, color }
	} = props;
	const { marker, format } = numberedListItemMarker.getMarker(props);
</script>

<ol
	data-notion-marker-format={format}
	class={`notion-block notion-list-numbered ${getColorCss(color)}`}
>
	<li class="notion-display-contents">
		<div class="notion-list-numbered-content">
			<span data-notion-marker-format={format} class="notion-list-marker">{marker}</span>
			<p>
				<RichText props={texts} />
			</p>
		</div>
		<slot />
	</li>
</ol>

<style>
	ol {
		list-style-type: none;
		padding-left: 0;
	}
	:global(
			.notion-list-numbered[data-notion-marker-format='romans']
				> .notion-display-contents
				> .notion-list-numbered-content
				> .notion-list-marker
		) {
		width: 3em !important;
		margin-right: 0em;
	}
	:global(.notion-list-numbered[data-notion-marker-format='romans'] > li > .notion-block) {
		margin-left: 2.9em;
	}

	.notion-list-marker::after {
		content: '.';
	}

	.notion-list-marker {
		width: 26px;
	}

	.notion-list-marker {
		display: inline-flex;
		flex-shrink: 0;
		justify-content: center;
		align-items: center;
		height: fit-content;
	}

	.notion-list-numbered-content {
		padding-top: 4px;
		padding-bottom: 4px;
		display: flex;
	}
</style>
