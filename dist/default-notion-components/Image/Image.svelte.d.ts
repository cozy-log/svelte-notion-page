import type { ImageArgs } from '../../types';
declare const Image: import("svelte").Component<{
    style?: string;
    props: ImageArgs;
    convertUrl?: (url: string) => string;
    children?: import("svelte").Snippet;
}, {}, "">;
export default Image;
