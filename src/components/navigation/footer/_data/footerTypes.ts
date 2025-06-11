// I know having types and data files within components is a bit unconventional, but I want to trial this and see how it works out
import { ReactNode } from "react";
import { Link } from "@/types/misc/Link";

export type FooterData = {
    columns: FooterColumn[];
    socials: FooterSocial[];
    friends: Link[];
};

export type FooterColumn = {
    title: string;
    links: Link[];
};

export type FooterSocial = {
    name: string;
    href: string;
    icon: ReactNode;
};