import { StaticImageData } from "next/image";

export type Exec = {
    name: string;
    image: StaticImageData;
    role: string;
    description: string;
    joined: string;
};

export type Faq = {
    question: string;
    answer: string;
};

export type Project = {
    name: string;
    description: string;
    logo: string;
    year: string;
    technologies: string[];
    slug?: string;
};

export type PastEventType = string;
