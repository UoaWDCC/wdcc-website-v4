export type Link = {
    href: string;
    label: string;
    external?: boolean;
};

/** type for footer navigation links
 * related to: src/data/links/navigationLinks.data.ts
 */
export type NavigationLink = Link & {
    drop?: { href: string; label: string }[];
};
