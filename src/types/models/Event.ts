import { StaticImageData } from "next/image";


export type EventCategory = (typeof EventCategories)[number];
export const EventCategories = ["Workshop", "Competition", "Social", "Projects", "Other"] as const;

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
