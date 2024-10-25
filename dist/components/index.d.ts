import Body from './Body.svelte';
import Cover from './Cover.svelte';
import Title from './Title.svelte';
import Blocks from './Blocks';
import _Notion from './Notion.svelte';
export declare const Notion: NotionStatic;
export default Notion;
export interface NotionStatic {
    new (...args: ConstructorParameters<typeof _Notion>): _Notion;
    Body: typeof Body;
    Title: typeof Title;
    Blocks: typeof Blocks;
    Cover: typeof Cover;
}
