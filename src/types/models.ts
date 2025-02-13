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

export type oldProject = {
    projectName: string;
    projectNameExtended?: string;
    client: string;
    description: string;
    descriptionExtended: string;
    logo?: string;
    year: string;
    technologies: string[];
    slug?: string;
    team: Team;
};

export type Project = {
    // card stuff
    slug: string;
    year: string;
    client: string;
    icon?: {
        src: string;
        alt: string;
    };
    // shared
    name: {
        title: string;
        extended?: string;
    };
    description: {
        short: string;
        extended?: string;
    };
    // for page
    brief: {
        description: string;
        image?: {
            src: string;
            alt: string;
        };
    };
    links?: {
        label: string;
        url: string;
        // button variant?
    }[];
    technologies: string[];
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
};

export type Team = {
    techlead: { name: string; image?: { src: string; alt: string } };
    manager: { name: string; image?: { src: string; alt: string } };
    members: ProjectMember[];
};

export type ProjectMember = {
    name: string;
    role: "engineer" | "techlead" | "designer" | "manager";
    image?: {
        src: string;
        alt: string;
    };
};

export type PastEventType = string;
