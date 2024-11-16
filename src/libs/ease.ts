// https://easings.net

export function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export function easeOutQuad(x: number): number {
    return 1 - (1 - x) * (1 - x);
}
