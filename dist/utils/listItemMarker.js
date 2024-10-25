import romans from 'romans';
export class ListItemMarker {
    resolvers;
    constructor(resolvers) {
        this.resolvers = resolvers;
    }
    getMarker(block) {
        const order = this.getMarkerOrder(block);
        const format = this.getMarkerFormat(block);
        const resolver = this.resolvers[format];
        return { marker: resolver(order), format: format === 2 ? 'romans' : 'non-romans' };
    }
    getMarkerOrder({ context: { previous }, type }) {
        let order = 1;
        console.log();
        while (previous) {
            if (previous.type !== type)
                break;
            order++;
            previous = previous.context.previous;
        }
        return order;
    }
    getMarkerFormat({ context: { parent }, type }) {
        let format = 0;
        while (parent) {
            if (parent.type !== type)
                break;
            format = (format + 1) % this.resolvers.length;
            parent = parent.context.parent;
        }
        return format;
    }
}
export const numberedListItemMarker = new ListItemMarker([
    (step) => `${step}`,
    (step) => alphaCount(step),
    (step) => romans.romanize(step).toLowerCase()
]);
export const bulletedListItemMarker = new ListItemMarker([() => '•', () => '◦', () => '▪']);
const charCode = 'a'.charCodeAt(0);
function alphaCount(a) {
    const b = [a - 1];
    let sp = 0;
    let out = '';
    let i;
    let div;
    sp = 0;
    while (sp < b.length) {
        if (b[sp] > 25) {
            div = Math.floor(b[sp] / 26);
            b[sp + 1] = div - 1;
            b[sp] %= 26;
        }
        sp += 1;
    }
    out = '';
    for (i = 0; i < b.length; i += 1) {
        out = String.fromCharCode(charCode + b[i]) + out;
    }
    return out;
}
