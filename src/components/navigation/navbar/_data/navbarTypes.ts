import { LinkType } from "../../../../types/misc/LinkType";

export type NavbarData = {
    links: NavigationLink[];
};

export type NavigationLink = LinkType & {
    drop?: { href: string; label: string }[];
};
