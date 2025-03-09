import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function removeDuplicates<T>(array: T[]): T[] {
    return [...new Set(array)];
}

export function isNullish<T>(value: T | null | undefined): value is null | undefined {
    return value === null || value === undefined;
}