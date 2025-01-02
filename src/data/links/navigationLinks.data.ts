import type { NavigationLink } from "@/types/navigation";

export const navigationLinkData: NavigationLink[] = [
    {
        href: "/projects",
        label: "Projects",
        drop: [
            {
                href: "/projects",
                label: "About Projects",
            },
            {
                href: "/projects#roles",
                label: "Project roles",
            },
            {
                href: "/projects/all",
                label: "All projects",
            },
        ],
    },
    {
        href: "/events",
        label: "Events",
        drop: [
            {
                href: "/events",
                label: "Upcoming",
            },
            {
                href: "/events/all",
                label: "All events",
            },
        ],
    },
    {
        href: "/about",
        label: "About",
        drop: [
            {
                href: "/about",
                label: "About WDCC",
            },
            {
                href: "/about/team",
                label: "Meet the team",
            },
            {
                href: "/about/faq",
                label: "FAQs",
            },
        ],
    },
];
