/* type for header navigation
related to: src/data/links/navigationLinks.json
*/

type Link = {
    href: string;
    label: string;
};

export interface FullLink extends Link {
    drop?: Link[];
}
