// I know having types and data files within components is a bit unconventional, but I want to trial this and see how it works out
import { LinkType } from "@/types/misc/LinkType";
import { ReactNode } from "react";

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
