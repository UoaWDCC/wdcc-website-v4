// LinkType to avoid clashes with library Link types (looking at you, Next...)
export type LinkType = {
    href: string;
    label: string;
    external?: boolean;
};
