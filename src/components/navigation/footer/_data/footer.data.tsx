import { social } from "@/assets/svg/socials";

import { FooterData } from "./footerTypes";

export const footerData: FooterData = {
    columns: [
        {
            title: "Explore",
            links: [
                {
                    label: "Home",
                    href: "/",
                },
                {
                    label: "About",
                    href: "/about",
                },
                {
                    label: "Team",
                    href: "/about/team",
                },
                {
                    label: "FAQs",
                    href: "/about/faq",
                },
            ],
        },
        {
            title: "Projects",
            links: [
                {
                    label: "About projects",
                    href: "/projects",
                },
                {
                    label: "Past projects",
                    href: "/projects/past",
                },
                {
                    label: "Join a project",
                    href: "/",
                },
                {
                    label: "Placeholder",
                    href: "/",
                },
            ],
        },
        {
            title: "Events",
            links: [
                {
                    label: "About events",
                    href: "/events",
                },
                {
                    label: "Upcoming events",
                    href: "/events",
                },
                {
                    label: "Past events",
                    href: "/events/all",
                },
            ],
        },
        {
            title: "Contact us",
            links: [
                {
                    label: "I'm a student",
                    href: "mailto:admin@wdcc.co.nz",
                },
                {
                    label: "I'm a business",
                    href: "mailto:outreach@wdcc.co.nz",
                },
            ],
        },
    ],
    socials: [
        {
            name: "Linktree",
            href: "https://go.wdcc.co.nz",
            icon: <social.discord />,
        },
        {
            name: "GitHub",
            href: "https://github.com/uoaWDCC",
            icon: <social.facebook />,
        },
        {
            name: "Discord",
            href: "https://discord.gg/CZX8aSSrGj",
            icon: <social.instagram />,
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/wdccuoa",
            icon: <social.youtube />,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/wdccuoa",
            icon: <social.mail />,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/wdccuoa",
            icon: <social.github />,
        },
    ],
    friends: [
        {
            label: "UOACS",
            href: "https://uoacs.org",
            external: true,
        },
        {
            label: "SESA",
            href: "https://sesa.org.nz",
            external: true,
        },
        {
            label: "DEVS",
            href: "https://dscuoa.nz",
            external: true,
        },
    ],
};
