import { getContext, hasContext, setContext } from 'svelte/internal';
export const NOTION_PAGE_INFO_KEY = 'notion_page_info';
const NOTION_COMPONENT_PROVIDER_KEY = 'notion_component_provider';
export const notionComponentProviderContext = {
    get() {
        return getContext(NOTION_COMPONENT_PROVIDER_KEY);
    },
    exist() {
        return hasContext(NOTION_COMPONENT_PROVIDER_KEY);
    },
    set(provider) {
        return setContext(NOTION_COMPONENT_PROVIDER_KEY, provider);
    }
};
