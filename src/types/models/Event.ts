import { ImageType } from "../misc/ImageType";

export const EventCategories = ["Workshop", "Competition", "Social", "Projects", "Other"] as const;
type EventCategory = (typeof EventCategories)[number];

type Partner = {
    href: string;
    src: string | ImageType;
    alt: string;
}

export type Event = {
    title: string;
    slug?: string;
    time: Date;
    location: string;
    description: string;
    category: EventCategory;
    thumbnail: ImageType;
    page: {
        description: string;
        image: ImageType;
    };
    partners: Partner[];
};
