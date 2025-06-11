import { Image } from "../misc/Image";

export const EventCategories = ["Workshop", "Competition", "Social", "Projects", "Other"] as const;
type EventCategory = (typeof EventCategories)[number];

type Partner = {
    href: string;
    src: string | Image;
    alt: string;
};

export type Event = {
    title: string;
    slug?: string;
    time: Date;
    location: string;
    description: string;
    category: EventCategory;
    thumbnail: Image;
    page: {
        description: string;
        image: Image;
    };
    partners: Partner[];
};
