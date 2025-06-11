// I know having types and data files within components is a bit unconventional, but I want to trial this and see how it works out
import { ReactNode } from "react";
import { LinkType } from "@/types/misc/Link";

export type FooterData = {
    columns: FooterColumn[];
    socials: FooterSocial[];
    friends: LinkType[];
};

export type FooterColumn = {
    title: string;
    links: LinkType[];
};

export type FooterSocial = {
    name: string;
    href: string;
    icon: ReactNode;
};