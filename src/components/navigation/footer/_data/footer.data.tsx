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
                    href: "/",
                },
                {
                    label: "Events",
                    href: "/",
                },
                {
                    label: "Team",
                    href: "/",
                },
                {
                    label: "FAQs",
                    href: "/",
                },
            ],
        },
        {
            title: "About Projects",
            links: [
                {
                    label: "Learn more",
                    href: "/",
                },
                {
                    label: "Joining our project",
                    href: "/",
                },
                {
                    label: "See our projects",
                    href: "/",
                },
            ],
        },
        {
            title: "Sponsors",
            links: [
                {
                    label: "Our sponsors",
                    href: "/",
                },
                {
                    label: "Sponsor us",
                    href: "/",
                },
            ],
        },
    ],
    socials: [
        {
            name: "Discord",
            href: "https://discord.gg/CZX8aSSrGj",
            icon: <DiscordLogo />,
        },
    ],
};
