import { Button } from "../misc/Button";
import { Image } from "../misc/Image";
import { Team } from "./Team";

export const difficulties = ["academy", "easy", "medium", "hard", "unassigned"] as const;
type Difficulty = (typeof difficulties)[number];

export type Project = {
    // card stuff
    slug: string;
    year: string;
    client: string;
    icon?: Image;
    // shared
    name: {
        title: string;
        extended?: string;
    };
    description: string;
    // for page
    brief: {
        description: string;
        image?: Image;
    };
    primaryLink?: Button;
    secondaryLink?: Button;
    technologies: string[];
    difficulty: Difficulty;
    team: Team;
};
