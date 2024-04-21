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
</style>
