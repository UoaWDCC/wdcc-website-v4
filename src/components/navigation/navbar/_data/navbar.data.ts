import type { NavbarData } from "@/components/navigation/navbar/_data/navbarTypes";

export const navbarData: NavbarData = {
    links: [
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
                    label: "Recent events",
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
    ],
};
