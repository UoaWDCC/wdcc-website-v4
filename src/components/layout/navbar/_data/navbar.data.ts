import type { NavbarData } from "@/components/layout/navbar/_data/navbarTypes";

export const navbarData: NavbarData = {
    links: [
        {
            href: "/projects",
            label: "Projects",
            drop: [
                {
                    href: "/projects",
                    label: "About projects",
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
                    href: "/events#roadmap",
                    label: "Roadmap",
                },
                {
                    href: "/events#recent",
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
