import type { NavigationLinkType } from "@/types/navigation";

export const navigationLinkData: NavigationLinkType[] = [
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
                href: "/team",
                label: "Meet the team",
            },
            {
                href: "/faq",
                label: "FAQs",
            },
        ],
    },
];