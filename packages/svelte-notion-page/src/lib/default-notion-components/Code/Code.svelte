<script lang="ts">
	import type { CodeArgs } from '$lib/types';
	import copyToClipboard from 'clipboard-copy';
	import RichText from '../base/richtext/RichText.svelte';
	import { fade, fly } from 'svelte/transition';
	import Prisim from 'prismjs';
	import 'prismjs/themes/prism.css';
	import loadDart from './support-language/dart';
	import loadElixir from './support-language/elixir';
	import loadGo from './support-language/go';
	import loadJava from './support-language/java';
	import loadKotlin from './support-language/kotlin';
	import loadMarkdown from './support-language/markdown';
	import loadPython from './support-language/python';
	import loadSql from './support-language/sql';
	import loadTypescript from './support-language/typescript';

	export let props: CodeArgs;

	/*
	prismjs가 기본적으로 지원하는 언어: 
	 'plaintext', 'markup', 'clike',
	 'html', 'svg', 'xml', 'css', 'javascript'
	*/
	[
		loadDart,
		loadTypescript,
		loadElixir,
		loadGo,
		loadJava,
		loadKotlin,
		loadMarkdown,
		loadPython,
		loadSql
	].forEach((load) => load(Prisim));

	const {
		code: { caption, rich_text: texts, language }
	} = props;

	let copied = false;
	$: content = texts.map(({ plain_text }) => plain_text).join('');

	let copyTimeout: NodeJS.Timeout | null = null;
	const handleCopy = () => {
		copied = true;
		copyToClipboard(content);
		if (copyTimeout != null) {
			clearTimeout(copyTimeout);
			copyTimeout = null;
		}

		copyTimeout = setTimeout(() => {
			copied = false;
		}, 2500);
	};
</script>

<figure class="notion-block notion-code">
	<div class="notion-code-content">
		<div class="notion-code-meta">
			<div class="notion-code-language">
				{language.replace(/^[a-z]/, (char) => char.toUpperCase())}
			</div>
			<button class="notion-code-copy" on:click={handleCopy}>
				<svg
					stroke="currentColor"
					stroke-width="0"
					viewBox="0 0 448 512"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
					/></svg
				>
				<span>copy</span>
			</button>
		</div>
		<code>
			{@html Prisim.highlight(
				content,
				Prisim.languages[language] || Prisim.languages['plain'],
				language
			)}
		</code>
	</div>
	{#if caption.length !== 0}
		<figcaption class="notion-asset-caption">
			<RichText props={caption} />
		</figcaption>
	{/if}

	{#if copied}
		<div in:fly|global={{ y: 40 }} out:fade|global class="notion-code-copy-tooltip">
			<div>{'Copied'}</div>
		</div>
	{/if}
</figure>

<style>
	.notion-code {
		position: relative;
		font-size: 85%;
	}

	.notion-code code {
		white-space: pre-wrap !important;
	}

	.notion-code-content {
		tab-size: 2;
		padding: 2.5em;
		background: var(--bg-color-1);
		border-radius: 3px;
		display: block;
		box-sizing: border-box;
		overflow: auto;
		font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace;
	}

	.notion-code-language {
		font-size: 12px;
		caret-color: var(--fg-color);
		color: var(--fg-color-3);
		background-color: var(--fg-color-0);
		user-select: none;
		z-index: 9;
		transition: opacity 0.4s cubic-bezier(0.3, 0, 0.5, 1);
		padding: 0px 6px;
		border-radius: 2px;
	}

	.notion-code-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transition: opacity 0.3s cubic-bezier(0.3, 0, 0.5, 1);
	}

	.notion-code-copy {
		user-select: none;
		z-index: 9;
		display: flex;
		padding: 6px 4px;
		align-items: center;
		font-size: 12px;
		line-height: 1em;
		cursor: pointer;
		gap: 4px;
		caret-color: var(--fg-color);
		color: var(--fg-color-3);
		background-color: var(--fg-color-0);

		transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1),
			color 0.2s cubic-bezier(0.3, 0, 0.5, 1), border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
		box-shadow: 0 1px 0 rgba(27, 31, 36, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.25);

		color: #24292f;
		border: none;
		border-radius: 2px;
	}

	.notion-code-copy:hover {
		background-color: var(--fg-color-1);
		border-color: rgba(27, 31, 36, 0.15);
		transition-duration: 0.1s;
	}

	.notion-code-copy:active {
		background: hsla(220, 14%, 93%, 1);
		border-color: rgba(27, 31, 36, 0.15);
		transition: none;
	}

	.notion-code .notion-code-meta {
		opacity: 0;
	}

	.notion-code:hover .notion-code-meta {
		opacity: 1;
	}

	.notion-code-copy-button svg {
		display: block;
		height: 14px;
		width: 14px;
	}

	.notion-code-copy-tooltip {
		pointer-events: none;
		position: fixed;
		bottom: 16px;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		z-index: 99;
		font-size: 14px;
	}

	.notion-code-copy-tooltip > div {
		padding: 6px 8px;
		background: #222;
		color: #fff;
		border-radius: 6px;
	}
</style>
