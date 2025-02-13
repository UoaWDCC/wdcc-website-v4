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
import NavigationMobileMenu from "./NavigationMobileMenu";
import { tv, VariantProps } from "tailwind-variants";

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

const navbar = tv({
    base: "absolute top-0 group z-50 flex w-full select-none items-center justify-between gap-4 py-4 px-8 lg:px-16",
    variants: {
        color: {
            dark: "text-white",
            light: "text-gray-800",
        },
    },
});

const navbarBg = tv({
    base: "absolute left-0 top-0 -z-10 size-full w-dvw",
    variants: {
        color: {
            dark: "bg-blue-900",
            light: "bg-background",
        },
    },
})

const navbarLine = tv({
    base: "hidden h-5 w-0.5 rounded md:block",
    variants: {
        color: {
            dark: "bg-gray-200",
            light: "bg-gray-700",
        },
    },
})

export interface NavbarProps {
    variant?: VariantProps<typeof navbar>;
    className?: ClassName
}

/**
 * General navbar component - the navigation bar (top) for all pages.
 * For the mobile-specific navigation that appears on small screens, see the subcomponent NavigationMobileMenu.
 *
 * Takes the following parameters as props of variants:
 * @variation color [dark, light] - the theme of the navbar.
 * 
 * This theme references the background of the top of the page on which the navbar is placed.
 * On light backgrounds, use light navbar. On dark backgrounds, use dark navbar.
 *
 * Don't confuse the name of the color mode with the actual text color - the "dark" navbar has white text (as is standard for a dark mode).
 */

export default function NavigationBar({variant = {color: "light"}}: NavbarProps) {
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
                className={navbar({ ...variant })}
            >
                <motion.div
                    className={navbarBg({...variant})}
                    initial={{ height: 0 }}
                    animate={{ height: isHovering ? 180 : 0 }} // hardcoded xdx,
                    onMouseLeave={handleDropExit}
                />
                <Anchor href="/">
                    <WDCCLogo className="fill-current transition duration-150 hover:opacity-70 lg:block" />
                </Anchor>
                <div className="flex w-full items-center  gap-8 whitespace-nowrap font-semibold justify-end lg:gap-12">
                    {/* Links */}
                    <div className="hidden h-full items-center gap-12 md:flex lg:gap-16">
                        <NavigationBarLinks links={navbarData.links} />
                    </div>
                    {/* Vertical line */}
                    <div className={navbarLine({...variant})} />
                    {/* Buttons */}
                    <div className="hidden-scrollbar flex gap-3 overflow-auto">
                        <NavigationMobileMenu variant={{color: variant.color}} className="md:hidden" links={navbarData.links} />
                        <Button variant={{ style: "primary", color: "blue" }} href="https://go.wdcc.co.nz" className="hidden md:block" newTab>
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
