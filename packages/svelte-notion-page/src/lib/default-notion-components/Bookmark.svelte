<script lang="ts">
	import type { BookmarkArgs } from '$lib/types';
	import RichText from './base/richtext/RichText.svelte';
	export let props: BookmarkArgs;
	const {
		bookmark: { url, caption }
	} = props;
	export let getMeta: (url: string) => Promise<{
		title?: string;
		description?: string;
		image?: string;
		favicon?: string;
	}> = async (url: string) => {
		return {
			title: 'You must replace this component with something that have own getMeta method',
			description: '',
			image: '',
			favicon: ''
		};
	};
	let { title, description, image, favicon } = {
		title: '',
		description: '',
		image: '',
		favicon: ''
	};
	$: {
		getMeta(url).then((result) => {
			title = result.title || '';
			description = result.description || '';
			image = result.image || '';
			favicon = result.favicon || '';
		});
	}
</script>

<div class="notion-block notion-bookmark">
	<a target="_blank" rel="noopener noreferrer" href={url} class="notion-bookmark-content">
		<div class="notion-bookmark-details">
			<h3 class="notion-bookmark-title">{title}</h3>
			{#if description}
				<p class="notion-bookmark-description">{description}</p>
			{/if}
			<div class="notion-bookmark-link">
				<div class="notion-bookmark-link-icon">
					{#if favicon}
						<img src={favicon} alt="favicon" />
					{/if}
				</div>
				<p class="notion-bookmark-link-text">{url}</p>
			</div>
		</div>
		{#if image}
			<div class="notion-bookmark-image">
				<img src={image} alt="thumbnail" />
			</div>
		{/if}
	</a>
	{#if caption.length !== 0}
		<div class="notion-asset-caption">
			<RichText props={caption} />
		</div>
	{/if}
</div>

