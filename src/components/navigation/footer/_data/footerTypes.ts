// I know having types and data files within components is a bit unconventional, but I want to trial this and see how it works out

import { Link } from "@/types/link";

export type FooterData = {
    columns: FooterColumn[] & { length: 3 }; // Styles currently depend on 3 columns
    socials: FooterSocial[];
};

export type FooterColumn = {
    title: string;
    links: Link[];
};

export type FooterSocial = {
    name: string;
    href: string;
    icon: string;
};