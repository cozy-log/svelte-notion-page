declare const ImageViewer: import("svelte").Component<{
    initialIndex: number;
    opened?: boolean;
    urls: string[];
    children?: import("svelte").Snippet;
}, {}, "opened">;
export default ImageViewer;
