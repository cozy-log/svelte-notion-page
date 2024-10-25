import type { NotionComponentProvider } from './NotionComponentProvider';
export declare const NOTION_PAGE_INFO_KEY = "notion_page_info";
export declare const notionComponentProviderContext: {
    get(): any;
    exist(): any;
    set(provider: NotionComponentProvider): any;
};
