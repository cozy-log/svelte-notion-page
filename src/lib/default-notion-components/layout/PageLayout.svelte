<script lang="ts">
	import Cover from '$lib/default-notion-components/layout/Cover.svelte';
	import Header from '$lib/default-notion-components/layout/Header.svelte';
	import PageIcon from '$lib/default-notion-components/layout/PageIcon.svelte';
	import type { Content } from '$lib/types';
	export let content: Content;
</script>

<div class="notion notion-app">
	<div class="notion-viewport" />
	<div class="notion-frame">
		{#if false}
			<Header />
		{/if}
		<div class="notion-page-scroller">
			{#if false}
				<div class="notion-page-cover-wrapper">
					<Cover />
				</div>
			{/if}
			<main
				class={`
				 notion-page
         notion-page-${false ? 'has' : 'no'}-cover 
         notion-page-${false ? 'has' : 'no'}-icon 
         notion-page-${false ? 'has-text' : 'has-image'}-icon 
       `}
				class:notion-full-width={false}
				class:notion-small-text={false}
			>
				{#if false}
					<PageIcon />
				{/if}

				<div
					class="notion-page-content"
					class:notion-page-content-has-aside={false}
					class:notion-page-content-has-toc={false}
				>
					<article class="notion-page-content-inner">
						<slot />
					</article>

					<!-- {hasAside && (
                          <PageAside
                            toc={toc}
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                            hasToc={hasToc}
                            hasAside={hasAside}
                            pageAside={pageAside}
                          />
                        )} -->
				</div>
			</main>
		</div>
	</div>
</div>

<style global>
	.notion-title {
		width: 100%;
		font-size: 2.5em;
		font-weight: 600;
		margin-bottom: 20px;
		line-height: 1.2;
	}
	.notion-page-content {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 1300px) and (min-height: 300px) {
		.notion-page-content-has-aside {
			display: flex;
			flex-direction: row;
			width: calc((100vw + var(--notion-max-width)) / 2);
		}

		.notion-page-content-has-aside .notion-aside {
			display: flex;
		}

		.notion-page-content-has-aside .notion-page-content-inner {
			width: var(--notion-max-width);
			max-width: var(--notion-max-width);
		}
	}

	.notion-page-content-inner {
		position: relative;
		display: flex;
		gap: 2px;
		flex-direction: column;
	}

	.notion-aside {
		position: sticky;
		top: 148px;
		z-index: 101;
		/* top: calc((100vh - 48px - 100%) / 2); */

		align-self: flex-start;
		flex: 1;

		display: none;
		flex-direction: column;
		align-items: center;
	}

	.notion-aside-table-of-contents {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-height: calc(100vh - 148px - 16px);
		min-width: 222px;
		overflow: auto;
		background: var(--bg-color);
		border-radius: 4px;
	}

	.notion-aside-table-of-contents-header {
		text-transform: uppercase;
		font-weight: 400;
		font-size: 1.1em;
		word-break: break-word;
	}

	.notion-aside-table-of-contents .notion-table-of-contents-item {
		line-height: 1;
	}

	.notion-aside-table-of-contents .notion-table-of-contents-item-indent-level-0:first-of-type {
		margin-top: 0;
	}

	.notion-aside-table-of-contents .notion-table-of-contents-item-indent-level-0 {
		margin-top: 0.25em;
	}

	.notion-aside-table-of-contents .notion-table-of-contents-item-indent-level-1 {
		font-size: 13px;
	}

	.notion-aside-table-of-contents .notion-table-of-contents-item-indent-level-2 {
		font-size: 12px;
	}

	.notion-aside-table-of-contents .notion-table-of-contents-item-body {
		border: 0 none;
	}

	.notion-table-of-contents-active-item {
		color: var(--select-color-0) !important;
	}

	.notion-app {
		position: relative;
		background: var(--bg-color);
		min-height: 100vh;
	}

	.notion-viewport {
		position: relative;
		padding: 0px;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.notion-page-cover {
		display: block;
		object-fit: cover;
		width: 100%;
		height: 30vh !important;
		min-height: 30vh !important;
		max-height: 30vh !important;
		padding: 0;
	}

	.notion-page-cover-wrapper {
		width: 100%;
		height: 30vh;
		min-height: 30vh;
		max-height: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.notion-collection-card-cover {
		overflow: hidden;
	}

	.notion-collection-card-cover span,
	.notion-collection-card-cover img {
		min-height: 100% !important;
		max-height: 100% !important;
	}

	.notion-page-cover-wrapper span,
	.notion-page-cover-wrapper img {
		width: 100% !important;
		height: 30vh !important;
		min-height: 30vh !important;
		max-height: 30vh !important;
	}

	.notion-page {
		position: relative;
		padding: 0;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		flex-shrink: 0;
		align-items: flex-start;
		width: 100%;
		max-width: 100%;
	}

	.notion-full-page {
		padding-bottom: calc(max(10vh, 120px));
	}

	.notion-page-no-cover {
		margin-top: 48px !important;
		padding-top: 96px;
	}

	.notion-page-no-cover.notion-page-no-icon {
		padding-top: 0;
	}

	.notion-page-no-cover.notion-page-has-image-icon {
		padding-top: 148px;
	}

	.notion-page-has-cover.notion-page-no-icon {
		padding-top: 48px;
	}

	.notion-page-has-cover {
		padding-top: 96px;
	}

	.notion-page-has-cover.notion-page-has-icon.notion-page-has-text-icon {
		padding-top: 64px;
	}

	.notion-page-icon-hero {
		position: absolute;
		top: 0;
		left: 50%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.notion-page-icon-hero.notion-page-icon-image {
		width: 124px;
		height: 124px;
		margin-left: -62px;
	}

	.notion-page-icon-hero.notion-page-icon-span {
		height: 78px;
		width: 78px;
		margin-left: -39px;
	}

	.notion-page-icon-hero .notion-page-icon {
		position: relative;
		display: block;
	}

	.notion-page-has-cover .notion-page-icon-hero.notion-page-icon-image {
		top: -62px;
	}

	.notion-page-has-cover .notion-page-icon-hero.notion-page-icon-span {
		top: -42px;
	}

	.notion-page-icon-hero.notion-page-icon-span .notion-page-icon {
		font-size: 78px;
		line-height: 1.1;
		margin-left: 0;
		color: var(--fg-color-icon);
	}

	.notion-page-icon-hero.notion-page-icon-image .notion-page-icon {
		display: block;
		border-radius: 3px;
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
	}

	.notion-page-icon-hero.notion-page-icon-image img {
		object-fit: cover;
	}

	.notion-page-icon {
		font-family: 'Apple Color Emoji', 'Segoe UI Emoji', NotoColorEmoji, 'Noto Color Emoji',
			'Segoe UI Symbol', 'Android Emoji', EmojiSymbols;
		font-size: 1.1em;
		fill: var(--fg-color-6);
		color: var(--fg-color-icon);
	}

	.notion-search .notion-page-icon {
		fill: var(--fg-color-6);
		color: var(--fg-color);
	}

	img.notion-page-icon,
	svg.notion-page-icon {
		display: block;
		object-fit: fill;
		border-radius: 3px;
		max-width: 100%;
		max-height: 100%;
	}

	.notion-page-icon-inline {
		width: 22px;
		height: 22px;
		max-width: 22px;
		max-height: 22px;
		margin: 0 4px;
	}

	.notion-page-icon-inline span {
		max-width: 100%;
		max-height: 100%;
	}

	.notion-page-icon-inline img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.notion-page {
		box-sizing: border-box;
		width: var(--notion-max-width);
		padding-left: calc(min(16px, 8vw));
		padding-right: calc(min(16px, 8vw));
	}

	.notion-full-width {
		box-sizing: border-box;
		--notion-max-width: calc(min(1920px, 98vw));
		padding-left: calc(min(96px, 8vw));
		padding-right: calc(min(96px, 8vw));
	}

	.notion-small-text {
		font-size: 14px;
	}

	.notion-frame {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.notion-page-scroller {
		position: relative;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		min-height: calc(100vh - var(--notion-header-height));
	}
</style>
