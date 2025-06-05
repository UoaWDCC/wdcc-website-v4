import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}

export function removeDuplicates<T>(array: T[]): T[] {
    return [...new Set(array)];
}

export function isNullish<T>(value: T | null | undefined): value is null | undefined {
    return value === null || value === undefined;
}

/**
 * Used to satisfy TS when using a string to index an object
 *
 * @see https://dev.to/mapleleaf/indexing-objects-in-typescript-1cgi
 */
export function hasKey<O extends object>(obj: O, key: PropertyKey): key is keyof O {
    return key in obj;
}
