import type { Event } from "@/types/models";

import placeholder from "@/assets/image/600x400.png";

import { events2024Data } from "./events2024/events2024.data";
import { events2025Data } from "./events2025/events2025.data";

export const eventsData = {
    header: {
        title: "events",
        description:
            "From educational workshops to social mixers, hackathons to code competitions, WDCC's regular events help students develop all kinds of valuable skills - and make friends along the way!",
        // button labels/links are currently hardcoded into the page header
    },
    roadmap: {
        title: "Events Roadmap",
        description:
            "Our events are planned well in advance, so you can always know what's coming up. Check out our roadmap below to see what's in store for the next few semesters.",
        image: {
            src: placeholder,
            alt: "Events Roadmap",
        },
    },
    eventsGrid: {
        title: "Recent Events",
        filterCategories: ["All", "Workshops", "Competitions", "Social"],
        events: [...events2024Data, ...events2025Data] as Event[],
    },
};
