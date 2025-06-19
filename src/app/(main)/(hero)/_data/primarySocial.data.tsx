import { ReactNode } from "react";
import { social } from "@/assets/svg/socials";

export type SocialLinkType = {
    icon: ReactNode;
    link: string;
};

export const primarySocial = [
    {
        icon: <social.discord />,
        link: "https://discord.gg/CZX8aSSrGj",
    },
    {
        icon: <social.instagram />,
        link: "https://www.instagram.com/wdccuoa",
    },
    {
        icon: <social.facebook />,
        link: "https://www.facebook.com/wdccuoa",
    },
];
