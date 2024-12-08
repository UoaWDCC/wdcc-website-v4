/* type for footer links
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
