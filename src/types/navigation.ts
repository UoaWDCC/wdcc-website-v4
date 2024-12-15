/* type for footer navigation links
 src/data/links/navigationLinks.data.ts
*/

export type NavigationLinkType = {
    href: string;
    label: string;
    drop?: { href: string; label: string }[];
};

/* type for footer navigation links
related to: src/data/links/footerLinks.json
*/

export type FooterLink = {
    title: string;
    links: {
        label: string;
        href: string;
        external?: boolean;
    }[];
};
