import { StaticImageData } from "next/image";

export type EventCardType = {
    title: string;
    time: Date;
    location: string;
    description: string;
    category: "Workshop" | "Competition" | "Social";
    image: StaticImageData;
    imageAlt: string;
}
