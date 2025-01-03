import { Link } from "../../../../types/link";

export type NavbarData = {
    links: NavigationLink[];
};

export type NavigationLink = Link & {
    drop?: { href: string; label: string }[];
};
