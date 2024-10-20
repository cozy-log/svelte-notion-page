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

<style>
	ul {
		list-style-type: none;
		padding-left: 0;
	}
	.notion-list-bulleted-content {
		padding-left: 2px;
		padding-top: 3px;
		padding-bottom: 3px;
		display: flex;
		align-items: flex-start;
	}
	.notion-list-marker {
		user-select: none;
		width: 24px;
		flex-shrink: 0;
		margin-right: 2px;
		line-height: 1;
		display: inline-flex;
		justify-content: center;
		font-family: Arial;
		font-size: 1.5em;
	}
</style>
