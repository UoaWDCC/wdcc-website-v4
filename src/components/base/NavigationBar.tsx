import React from "react";

import links from "@/data/links/navigationLinks.json";
import { cn } from "@/libs/utils";
import { FullLink } from "@/types/links";
import { ClassName } from "@/types/utils";
import WDCCLogo from "../logo/WDCCLogo";
import NavigationMenu from "../navigation/NavigationMenu";
import { Anchor } from "../primitives/Anchor";
import DropDown from "../primitives/DropDown";
import { NavLink } from "../primitives/NavLink";

const NavigationBar = ({ className }: ClassName) => {
    return (
        <div className={cn("flex select-none flex-col items-center justify-between gap-4 sm:flex-row", className)}>
            <WDCCLogo className="*:fill-black lg:block" />
            <div className="flex items-center gap-8 font-semibold">
                <div className="hidden h-full items-center gap-8 md:flex">
                    {(links as FullLink[]).map((link) =>
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
                    <NavigationMenu className="md:hidden" links={links} />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
