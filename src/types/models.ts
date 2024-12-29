import { StaticImageData } from "next/image";

// TODO: all of these definitely subject to change
export type Exec = {
    name: string;
    image: StaticImageData;
    description: string;
};

export type Project = {
    name: string;
    description: string;
    logo: string;
};

export type AboutCardType = {
    title: string;
    content: string;
    image: StaticImageData;
    imageAlt: string;
};

export type PastEventType = string;
