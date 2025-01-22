import { StaticImageData } from "next/image";

// TODO: all of these definitely subject to change
export type Exec = {
    name: string;
    image: StaticImageData;
    role: string;
    description: string;
    joined: string;
};

export type Project = {
    name: string;
    description: string;
    logo: string;
    year: string;
    technologies: string[];
    slug?: string;
};

export type AboutCardType = {
    title: string;
    content: string;
    image: StaticImageData;
    imageAlt: string;
};

export type PastEventType = string;
