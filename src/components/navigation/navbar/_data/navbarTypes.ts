import { LinkType } from "../../../../types/link";

export type NavbarData = {
    links: NavigationLink[];
}

export type NavigationLink = LinkType & {
    drop?: { href: string; label: string }[];
};
