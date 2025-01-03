import { FooterData } from "./footerTypes";
import DiscordLogo from '@/assets/svg/DiscordLogo';

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
                    label: "Projects",
                    href: "/projects",
                },
                {
                    label: "Events",
                    href: "/events",
                },
                {
                    label: "About us",
                    href: "/about",
                },
            ],
        },
        {
            title: "Info",
            links: [
                {
                    label: "???",
                    href: "/",
                },
                {
                    label: "???",
                    href: "/",
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
            title: "???",
            links: [
                {
                    label: "???",
                    href: "/",
                },
                {
                    label: "???",
                    href: "/",
                },
            ],
        },
        {
            title: "Contact Us",
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
            icon: <DiscordLogo />,
        },
        {
            name: "GitHub",
            href: "https://github.com/uoaWDCC",
            icon: <DiscordLogo />,
        },
        {
            name: "Discord",
            href: "https://discord.gg/CZX8aSSrGj",
            icon: <DiscordLogo />,
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/wdccuoa",
            icon: <DiscordLogo />,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/wdccuoa",
            icon: <DiscordLogo />,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/wdccuoa",
            icon: <DiscordLogo />,
        },
    ],
};
