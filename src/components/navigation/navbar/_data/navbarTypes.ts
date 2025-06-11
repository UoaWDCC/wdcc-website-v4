import { Link } from "../../../../types/misc/Link";

export type NavbarData = {
    links: NavigationLink[];
};

export type NavigationLink = Link & {
    drop?: { href: string; label: string }[];
};
