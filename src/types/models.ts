import { StaticImageData } from "next/image";

import { Media } from "@/payload-types";

export type Exec = {
    name: string;
    role: string;
    image?: (number | null) | Media;
    description: string;
    joined: string;
    id?: string | null;
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
    description: string;
    // for page
    brief: {
        description: string;
        image?: {
            src: string;
            alt: string;
        };
    };
    primaryLink?: {
        label: string;
        href: string;
    };
    secondaryLink?: {
        label: string;
        href: string;
    };
    technologies: string[];
    team: Team;
};

export type OldEvent = {
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

export const EventCategories = ["Workshop", "Competition", "Social"] as const;

export type EventCategory = (typeof EventCategories)[number];

export type Event = {
    title: string;
    slug?: string;
    time: Date;
    location: string;
    description: string;
    category: EventCategory;
    thumbnail: {
        src: string | StaticImageData;
        alt: string;
    };
    page: {
        description: string;
        image: {
            src: string;
            alt: string;
        };
    };
    partners: {
        href: string;
        src: string;
        alt: string;
    }[];
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
