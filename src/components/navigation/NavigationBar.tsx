import React from "react";

import { cn } from "@/libs/utils";
import { ClassName } from "@/types/utils";
import { Anchor } from "../primitives/Anchor";
import WDCCLogo from "../svg/WDCCLogo";
import DiscordLogo from "../svg/WDCCLogo copy";

const NavigationBar = ({ className }: ClassName) => {
    return (
        <div className={cn("flex w-full select-none justify-between", className)}>
            <WDCCLogo className="*:fill-black" />
            <div className="flex items-center gap-8 font-semibold">
                <Anchor set={{ color: "ghost" }} href="/projects">
                    Projects
                </Anchor>
                <Anchor set={{ color: "ghost" }} href="/events">
                    Events
                </Anchor>
                <Anchor set={{ color: "ghost" }} href="/about">
                    About
                </Anchor>
                <Anchor set={{ color: "ghost" }} href="/team">
                    Team
                </Anchor>
                <div className="h-full py-3">
                    <div className="h-full w-0.5 rounded bg-black"></div>
                </div>
                <div className="flex gap-3">
                    <Anchor set={{ color: "icon" }} href="/team">
                        <DiscordLogo className="size-5 fill-white" />
                    </Anchor>
                    <Anchor set={{ color: "primary" }} className="rounded-full px-3" href="/socials  ">
                        Join Wdcc
                    </Anchor>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
