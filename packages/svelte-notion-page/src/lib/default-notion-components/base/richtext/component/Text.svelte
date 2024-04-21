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
</style>
