import type { NavigationLinkType } from "@/types/navigation";

export const navigationLinkData: NavigationLinkType[] = [
    {
        href: "/projects",
        label: "Projects",
        drop: [
            {
                href: "/learn-more",
                label: "About Projects",
            },
            {
                href: "/project-roles",
                label: "Project roles",
            },
            {
                href: "/projects",
                label: "All Projects",
            },
        ],
    },
    {
        href: "/events",
        label: "Events",
        drop: [
            {
                href: "/upcoming",
                label: "Upcoming events",
            },
            {
                href: "/past-events",
                label: "Past events",
            },
        ],
    },
    {
        href: "/about",
        label: "About",
    },
    {
        href: "/faq",
        label: "FAQs",
    },
];
