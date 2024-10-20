<script lang="ts">
	import type { TextArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import he from 'he';
	export let props: TextArgs;
	const {
		href,
		text: { content },
		annotations: { bold, italic, strikethrough, underline, code, color }
	} = props;

	const types = [
		!!href && 'link',
		bold && 'bold',
		italic && 'italic',
		strikethrough && 'strikethrough',
		underline && 'underline',
		code && 'code'
	].filter((type) => !!type);

	const text = types.reduce((child, type) => {
		switch (type) {
			case 'link':
				return `<a class="notion-link" href=${href}>${child}</a>`;
			case 'bold':
				return `<b>${child}</b>`;
			case 'italic':
				return `<em>${child}</em>`;
			case 'strikethrough':
				return `<s>${child}</s>`;
			case 'underline':
				return `<span class="notion-inline-underscore">${child}</span>`;
			case 'code':
				return `<code class="notion-inline-code">${child}</code>`;
			default:
				throw { message: `unexpected type: ${type}` };
		}
	}, `<span class="${getColorCss(color)} notion-span">${he.encode(content)}</span>`);
</script>

{@html text}

<style global>
	:global(.notion-inline-code) {
		color: #eb5757;
		padding: 0.2em 0.4em;
		background: var(--bg-color-2);
		border-radius: 3px;
		font-size: 85%;
		font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
	}

	:global(.notion-inline-underscore) {
		text-decoration: underline;
	}

	:global(.notion-link) {
		color: inherit;
		word-break: break-word;
		text-decoration: inherit;
		border-bottom: 0.05em solid;
		border-color: var(--fg-color-2);
		opacity: 0.7;
		transition: border-color 100ms ease-in, opacity 100ms ease-in;
	}

	:global(.notion-link:hover) {
		border-color: var(--fg-color-6);
		opacity: 1;
	}

	:global(.notion-span) {
		word-break: break-all;
		white-space: pre-wrap;
	}
</style>
