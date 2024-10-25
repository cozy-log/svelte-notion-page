import type { ComponentType } from 'svelte';
export type NotionComponentProviderOptions = {
    fallBackComponent?: ComponentType;
};
export declare class NotionComponentProvider {
    private map;
    fallBackComponent: ComponentType;
    constructor(map: {
        [key: string]: ComponentType;
    }, { fallBackComponent }?: NotionComponentProviderOptions);
    register(key: string, component: ComponentType): void;
    registerAll(map: {
        [key: string]: ComponentType;
    }): void;
    resolve(key: string): ComponentType;
}
export declare const defaultComponents: Record<string, ComponentType>;
export declare const defaultProvider: NotionComponentProvider;
