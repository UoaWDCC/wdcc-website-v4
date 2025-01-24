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
    client: string;
    description: string;
    logo: string;
    year: string;
    technologies: string[];
    slug?: string;
    team: Team;
};

export type Team = {
    techlead: { name: string; image?: string };
    manager: { name: string; image?: string };
    members: ProjectMember[];
};

export type ProjectMember = {
    name: string;
    role: string;
    image?: string;
};

export type PastEventType = string;
