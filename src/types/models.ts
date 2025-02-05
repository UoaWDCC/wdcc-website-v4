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
    projectName: string;
    projectNameExtended: string;
    client: string;
    description: string;
    descriptionExtended: string;
    logo: string;
    year: string;
    technologies: string[];
    slug?: string;
    team: Team;
};

export type Event = {
    title: string;
    time: Date;
    location: string;
    description: string;
    descriptionExtended: string;
    category: "Workshop" | "Competition" | "Social";
    thumbnail: StaticImageData;
    image: string;
    imageAlt: string;
    collabPartners: string[];
    slug?: string;
}

export type Team = {
    techlead: { name: string; image?: string };
    manager: { name: string; image?: string };
    members: ProjectMember[];
};

export type ProjectMember = {
    name: string;
    role: "engineer" | "techlead" | "designer" | "manager";
    image?: string;
};

export type PastEventType = string;
