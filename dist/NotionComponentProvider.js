import { Todo, Toggle, Paragraph, Image, Video, Audio, Bookmark, BulletedListItem, Callout, CheckBox, Code, Column, ColumnList, Divider, Equation, FallBackComponent, Heading1, Heading2, Heading3, NumberedListItem, Quote, Table, TableRow, SyncedBlock } from './default-notion-components';
export class NotionComponentProvider {
    map;
    fallBackComponent;
    constructor(map, { fallBackComponent = FallBackComponent } = {}) {
        this.map = { ...defaultComponents, ...map };
        this.fallBackComponent = fallBackComponent;
    }
    register(key, component) {
        this.map[key] = component;
    }
    registerAll(map) {
        this.map = { ...this.map, ...map };
    }
    resolve(key) {
        const target = this.map[key];
        if (target === undefined) {
            return this.fallBackComponent;
        }
        return target;
    }
}
export const defaultComponents = {
    paragraph: Paragraph,
    heading_1: Heading1,
    heading_2: Heading2,
    heading_3: Heading3,
    column: Column,
    column_list: ColumnList,
    numbered_list_item: NumberedListItem,
    bulleted_list_item: BulletedListItem,
    to_do: Todo,
    toggle: Toggle,
    quote: Quote,
    callout: Callout,
    equation: Equation,
    code: Code,
    image: Image,
    video: Video,
    divider: Divider,
    audio: Audio,
    bookmark: Bookmark,
    table: Table,
    table_row: TableRow,
    synced_block: SyncedBlock,
    // low level custom. 넣을까 말까 고민중.., 
    checkbox: CheckBox,
};
export const defaultProvider = new NotionComponentProvider({});
