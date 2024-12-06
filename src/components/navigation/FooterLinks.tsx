import React from "react";

import { cn } from "@/libs/utils";
import FooterBlock from "./FooterBlock";
import FooterSocials from "./FooterSocials";

export type FooterLink = {
    title: string;
    links: {
        label: string;
        href: string;
        external?: boolean;
    }[];
};

const footerLinks: FooterLink[] = [
    {
        title: "Explore",
        links: [
            { label: "Home", href: "/" },
            { label: "Projects", href: "/" },
            { label: "Events", href: "/" },
            { label: "Team", href: "/" },
            { label: "FAQs", href: "/" },
        ],
    },
    {
        title: "About Projects",
        links: [
            { label: "Learn more", href: "/" },
            { label: "Joining our project", href: "/" },
            { label: "See our projects", href: "/" },
        ],
    },
    {
        title: "Sponsors",
        links: [
            { label: "our sponsors", href: "/" },
            { label: "sponsor us", href: "/" },
        ],
    },
];

const FooterLinks = () => {
    return (
        <footer className="flex flex-col items-center bg-blue-900 pb-20">
            <div
                className={cn(
                    "grid w-[clamp(300px,100%,1200px)] grid-cols-1 whitespace-nowrap px-10 pt-4 text-white sm:grid-cols-3 lg:grid-cols-5"
                )}
            >
                {/* grid block of 1-3-1 with center being the contents */}
                <div className="hidden lg:block"></div>
                {footerLinks.map((data, i) => (
                    <FooterBlock key={data.title} {...data} last={i === 2} />
                ))}
                <div className="hidden lg:block"></div>
                {/* second row */}
                <FooterSocials />
            </div>
        </footer>
    );
};

export default FooterLinks;
