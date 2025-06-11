import type { Event } from "@/types/models";
import { ParsePayloadEvent } from "@/types/parser/ParsePayloadEvent";
import { getAllEvents } from "@/payload/actions/getAllEvents";

export type Category = {
    name: string;
    colors: string;
};

const events = (await getAllEvents()).map(ParsePayloadEvent);

export const eventsData = {
    header: {
        title: "Events",
        description:
            "From educational workshops to social mixers, hackathons to code competitions, WDCC's regular events help students develop all kinds of valuable skills - and make friends along the way!",
        // button labels/links are currently hardcoded into the page header
    },
    roadmap: {
        title: "Events Roadmap",
        description:
            "Our events are planned well in advance, so you can always know what's coming up. Check out our roadmap below to see what's in store for the next few semesters.",
        image: {
            src: "/event-roadmap-s1-pixel-abbey.svg",
            alt: "Events Roadmap",
        },
    },
    eventsGrid: {
        title: "Recent Events",
        categories: [
            {
                name: "All",
                colors: "border-gray-250 bg-gray-100 text-gray-900 hover:bg-gray-200",
            },
            {
                name: "Workshop",
                colors: "border-blue-400 bg-blue-100 text-blue-800 hover:bg-blue-150",
            },
            {
                name: "Competition",
                colors: "border-yellow-400 bg-yellow-100 text-yellow-800 hover:bg-yellow-150",
            },
            {
                name: "Social",
                colors: "border-purple-400 bg-purple-100 text-purple-800 hover:bg-purple-150",
            },
        ],
        //merge payload and hardcoded events, sort them by date
        events: events
            .filter((event): event is Event => event !== undefined)
            .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()),
    },
};
