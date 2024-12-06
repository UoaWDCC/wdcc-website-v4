import React from "react";

import { cn } from "@/libs/utils";
import { ClassName } from "@/types/utils";
import DiscordLogo from "../logo/DiscordLogo";
import WDCCLogo from "../logo/WDCCLogo";
import { Anchor } from "../primitives/Anchor";
import { NavLink } from "../primitives/NavLink";

const NavigationBar = ({ className }: ClassName) => {
    return (
        <div className={cn("flex select-none justify-between", className)}>
            <WDCCLogo className="*:fill-black" />
            <div className="flex items-center gap-8 font-semibold">
                <div className="hidden h-full items-center gap-8 md:flex">
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/events">Events</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/team">Team</NavLink>
                    <div className="h-full py-3">
                        <div className="h-full w-0.5 rounded bg-black"></div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Anchor set={{ color: "icon" }} href="/team">
                        <DiscordLogo className="size-5 fill-white" />
                    </Anchor>
                    <Anchor set={{ color: "primary" }} className="rounded-full px-3" href="/socials  ">
                        Join WDCC
                    </Anchor>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
