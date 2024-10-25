import type { ContextedBlock } from '../types';
export declare class ListItemMarker {
    private resolvers;
    constructor(resolvers: ((step: number) => string)[]);
    getMarker(block: ContextedBlock): {
        marker: string;
        format: string;
    };
    private getMarkerOrder;
    private getMarkerFormat;
}
export declare const numberedListItemMarker: ListItemMarker;
export declare const bulletedListItemMarker: ListItemMarker;
