import { ButtonType } from "../misc/Button";
import { ImageType } from "../misc/Image";
import { Team } from "./Team";

export const difficulties = ["academy", "easy", "medium", "hard", "unassigned"] as const;
type Difficulty = (typeof difficulties)[number];

export type Project = {
    // card stuff
    slug: string;
    year: string;
    client: string;
    icon?: ImageType;
    // shared
    name: {
        title: string;
        extended?: string;
    };
    description: string;
    // for page
    brief: {
        description: string;
        image?: ImageType;
    };
    primaryLink?: ButtonType;
    secondaryLink?: ButtonType;
    technologies: string[];
    difficulty: Difficulty;
    team: Team;
};
