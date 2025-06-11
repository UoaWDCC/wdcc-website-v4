import { Team } from "./Team";

type Difficulty = "academy" | "easy" | "medium" | "hard" | "unassigned";
export const difficulties: Difficulty[] = ["academy", "easy", "medium", "hard", "unassigned"];

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
    difficulty: Difficulty;
    team: Team;
};
