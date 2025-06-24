// https://easings.net

export const ease: Record<string, [number, number, number, number]> = {
    outExpo: [0.16, 1, 0.3, 1],
    outQuad: [0.5, 1, 0.89, 1],
    outQuint: [0.13, 0.71, 0.35, 1],
};

export function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export function easeOutQuad(x: number): number {
    return 1 - (1 - x) * (1 - x);
}
