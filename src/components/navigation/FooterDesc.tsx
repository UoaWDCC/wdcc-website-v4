import React from "react";

import { cn } from "@/libs/utils";

type FooterLink = {
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

const FooterDesc = () => {
    return (
        <footer
            className={cn(
                "bg-wdcc-blue-temp grid w-full grid-cols-3 whitespace-nowrap p-2 px-10 py-10 pl-40 text-white lg:grid-cols-5"
            )}
        >
            <div className="hidden lg:block"></div>
            {footerLinks.map((data) => (
                <div key={data.title}>
                    <strong className="">{data.title}</strong>
                    {data.links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target={link.external ? "_blank" : "_self"}
                            className="block"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            ))}

            <div className="hidden lg:block"></div>
        </footer>
    );
};

export default FooterDesc;
