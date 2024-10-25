import type { BookmarkArgs } from '../types';
declare const Bookmark: import("svelte").Component<{
    props: BookmarkArgs;
    getMeta?: (url: string) => Promise<{
        title?: string;
        description?: string;
        image?: string;
        favicon?: string;
    }>;
}, {}, "">;
export default Bookmark;
