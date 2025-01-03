// I know having types and data files within components is a bit unconventional, but I want to trial this and see how it works out

import { Link } from "@/types/link";
import { ReactNode } from "react";

export type FooterData = {
    columns: FooterColumn[];
    socials: FooterSocial[];
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