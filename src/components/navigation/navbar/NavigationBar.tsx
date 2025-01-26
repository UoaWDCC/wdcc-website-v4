"use client";

import { createContext, useContext, useState } from "react";
import { motion } from "motion/react";

import type { ClassName } from "@/types/utils";

import Arrow from "@/assets/svg/Arrow";
import WDCCLogo from "@/assets/svg/WDCCLogo";
import { navbarData } from "@/components/navigation/navbar/_data/navbar.data";
import { NavigationLink } from "@/components/navigation/navbar/_data/navbarTypes";
import DropDown from "@/components/navigation/navbar/DropDownLink";
import { UnderlineLink } from "@/components/navigation/UnderlineLink";
import { Button } from "@/components/primitives/Button";
import { cn } from "@/libs/utils";

import { Anchor } from "../../primitives/Anchor";
import NavigationMenu from "./NavigationMobileMenu";

const hoverContext = createContext({} as hoverContextProps);

type hoverContextProps = {
    handleDropEnter: () => void;
    handleDropExit: () => void;
    isHovering: boolean;
};

export const useNavHover = () => {
    const context = useContext(hoverContext);
    if (!context) {
        throw new Error("useNavHover must be used within a NavHoverProvider");
    }
    return context;
};

export default function NavigationBar({ className }: ClassName) {
    const [isHovering, sethover] = useState(false);

    const handleDropEnter = () => {
        sethover(true);
    };
    const handleDropExit = () => {
        sethover(false);
    };

    return (
        <hoverContext.Provider
            value={
                {
                    isHovering,
                    handleDropEnter,
                    handleDropExit,
                } as hoverContextProps
            }
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 1 : 0 }}
                className="pointer-events-none fixed inset-0 z-40 h-dvh w-dvw bg-black/40 backdrop-blur-sm"
            />
            <nav
                className={cn(
                    "group fixed top-0 z-50 flex w-full select-none flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:px-16 lg:py-4",
                    className
                )}
            >
                <motion.div
                    className="absolute left-0 top-0 -z-10 size-full w-dvw bg-background"
                    initial={{ height: 0 }}
                    animate={{ height: isHovering ? 180 : 0 }} // hardcoded xdx,
                    onMouseLeave={handleDropExit}
                />
                <Anchor href="/">
                    <WDCCLogo className="fill-black transition duration-150 hover:opacity-70 lg:block" />
                </Anchor>
                <div className="flex w-full items-center justify-center gap-8 whitespace-nowrap font-semibold sm:justify-end lg:gap-12">
                    {/* Links */}
                    <div className="hidden h-full items-center gap-16 md:flex lg:gap-16">
                        <NavigationBarLinks links={navbarData.links} />
                    </div>
                    {/* Vertical line */}
                    <div className="hidden h-5 w-0.5 rounded bg-gray-700 md:block" />
                    {/* Buttons */}
                    <div className="hidden-scrollbar flex gap-3 overflow-auto">
                        <NavigationMenu className="md:hidden" links={navbarData.links} />
                        <Button variant={{ style: "primary", color: "blue" }} href="https://go.wdcc.co.nz" newTab>
                            Join WDCC <Arrow />
                        </Button>
                    </div>
                </div>
            </nav>
        </hoverContext.Provider>
    );
}

const NavigationBarLinks = ({ links }: { links: NavigationLink[] }) =>
    // z-10 is to ensure top-level nav links sit on top of sublinks
    links.map((link) =>
        link.drop ? (
            <DropDown key={link.label} link={link} className="z-10" href={link.href} />
        ) : (
            <UnderlineLink key={link.label} href={link.href} className="z-10">
                {link.label}
            </UnderlineLink>
        )
    );
