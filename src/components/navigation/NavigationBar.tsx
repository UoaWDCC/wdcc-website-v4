import React from "react";

import { cn } from "@/libs/utils";
import { ClassName } from "@/types/utils";
import DiscordLogo from "../logo/DiscordLogo";
import WDCCLogo from "../logo/WDCCLogo";
import { Anchor } from "../primitives/Anchor";
import DropDown from "../primitives/DropDown";
import { NavLink } from "../primitives/NavLink";
import NavigationMenu from "./NavigationMenu";

type Link = {
    href: string;
    label: string;
};

export interface FullLink extends Link {
    drop?: Link[];
}

const links: FullLink[] = [
    {
        href: "/projects",
        label: "Projects",
        drop: [
            { href: "/learn-more", label: "About Projects" },
            { href: "/project-roles", label: "Project roles" },
            { href: "/past-events", label: "All Projects" },
        ],
    },
    {
        href: "/events",
        label: "Events",
        drop: [
            { href: "/upcoming", label: "Upcoming events" },
            { href: "/past-events", label: "Past events" },
        ],
    },
    { href: "/about", label: "About" },
    { href: "/team", label: "team" },
    { href: "/faq", label: "FAQs" },
];

// const socials: FullLink = {
//     href: "/projects",
//     label: "Socials",
//     drop: [
//         { href: "", label: "Discord" },
//         { href: "", label: "Instagram " },
//         { href: "", label: "Facebook" },
//         { href: "", label: "Email" },
//         { href: "", label: "Github" },
//     ],
// };

const NavigationBar = ({ className }: ClassName) => {
    return (
        <div className={cn("flex select-none flex-col items-center justify-between gap-4 sm:flex-row", className)}>
            <WDCCLogo className="*:fill-black lg:block" />
            <div className="flex items-center gap-8 font-semibold">
                <div className="hidden h-full items-center gap-8 md:flex">
                    {links.map((link) =>
                        link.drop ? (
                            <DropDown key={link.label} link={link} />
                        ) : (
                            <NavLink key={link.label} href={link.href}>
                                {link.label}
                            </NavLink>
                        )
                    )}
                    <div className="h-5 w-0.5 rounded bg-black"></div>
                </div>
                <div className="flex gap-3">
                    <Anchor set={{ color: "muted" }} className="rounded-full" href="/socials  ">
                        <span className="px-3">Our socials</span>
                    </Anchor>
                    <Anchor set={{ color: "primary" }} className="rounded-full px-3 py-2" href="/socials  ">
                        Join WDCC
                    </Anchor>
                    {/* <NavigationMenu className="md:hidden" {...links} /> */}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
