import Body from './Body.svelte';
import Cover from './Cover.svelte';
import Title from './Title.svelte';
import Blocks from './Blocks';
import _Notion from './Notion.svelte';

export const Notion = _Notion as NotionStatic;
Notion.Blocks = Blocks;
Notion.Title = Title;
Notion.Body = Body;
Notion.Cover = Cover;

export default Notion;

export interface NotionStatic {
	new (...args: ConstructorParameters<typeof _Notion>): _Notion;
	Body: typeof Body;
	Title: typeof Title;
	Blocks: typeof Blocks;
	Cover: typeof Cover;
}
