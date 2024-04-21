<script lang="ts">
	import type { BulletedListItemArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { bulletedListItemMarker } from '$lib/utils/listItemMarker';
	import RichText from './base/richtext/RichText.svelte';

	export let props: BulletedListItemArgs;

	const {
		bulleted_list_item: { color, rich_text: texts }
	} = props;
	const { marker } = bulletedListItemMarker.getMarker(props);
</script>

<ul class={`notion-block notion-list-bulleted ${getColorCss(color)}`}>
	<li class="notion-display-contents">
		<div class="notion-list-bulleted-content">
			<span class="notion-list-marker">{marker}</span>
			<p>
				<RichText props={texts} />
			</p>
		</div>
		<slot />
	</li>
</ul>
