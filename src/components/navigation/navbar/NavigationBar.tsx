"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { tv, VariantProps } from "tailwind-variants";

import type { ClassName } from "@/types/utils";

import Arrow from "@/assets/svg/Arrow";
import { social } from "@/assets/svg/socials";
import WDCCLogo from "@/assets/svg/WDCCLogo";
import { navbarData } from "@/components/navigation/navbar/_data/navbar.data";
import { NavigationLink } from "@/components/navigation/navbar/_data/navbarTypes";
import DropDown from "@/components/navigation/navbar/DropDownLink";
import { UnderlineLink } from "@/components/navigation/UnderlineLink";
import { Button } from "@/components/primitives/Button";
import { useScroll } from "@/components/scroll/ScrollContext";

import { Anchor } from "../../primitives/Anchor";
import NavigationMobileMenu from "./NavigationMobileMenu";

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
    base: "group absolute top-0 z-50 flex w-full items-center justify-between gap-4 px-8 py-4 select-none lg:px-16",
    variants: {
        color: {
            dark: "text-white",
            light: "text-gray-800",
        },
    },
});

const navbarBg = tv({
    base: "size-full",
    variants: {
        color: {
            dark: "bg-blue-900",
            light: "bg-background",
        },
    },
});

const navbarLine = tv({
    base: "hidden h-5 w-0.5 rounded-sm md:block",
    variants: {
        color: {
            dark: "bg-gray-200",
            light: "bg-gray-700",
        },
    },
});

export interface NavbarProps {
    variant?: VariantProps<typeof navbar>;
    className?: ClassName;
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

export default function NavigationBar({ variant = { color: "light" } }: NavbarProps) {
    const [isHovering, sethover] = useState(false);
    const { getScrollContainer } = useScroll();

    const handleDropEnter = () => {
        sethover(true);
    };

    const handleDropExit = () => {
        sethover(false);
    };

    useEffect(() => {
        getScrollContainer().addEventListener("scroll", handleDropExit);
        return () => {
            getScrollContainer().removeEventListener("scroll", handleDropExit);
        };
    }, [getScrollContainer]);

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
                className="pointer-events-none fixed inset-0 z-40 h-dvh w-dvw bg-black/40 backdrop-blur-xs data-[hover=true]:pointer-events-auto"
                onPointerEnter={handleDropExit}
                data-hover={isHovering}
            />
            <nav className={navbar({ ...variant })}>
                <div
                    className="pointer-events-none absolute top-0 left-0 -z-10 h-[180px] w-full data-[hover=true]:pointer-events-auto"
                    data-hover={isHovering}
                >
                    <motion.div
                        className={navbarBg({ ...variant })}
                        initial="initial"
                        animate="animate"
                        variants={containerVariant(isHovering)}
                    />
                </div>
                <Anchor href="/">
                    <WDCCLogo className="fill-current transition duration-150 hover:opacity-70 lg:block" />
                </Anchor>
                <div className="flex w-full items-center justify-end gap-8 font-semibold whitespace-nowrap lg:gap-12">
                    {/* Links */}
                    <div className="hidden h-full items-center gap-12 md:flex lg:gap-16">
                        <NavigationBarLinks links={navbarData.links} />
                    </div>
                    {/* Vertical line */}
                    <div className={navbarLine({ ...variant })} />
                    {/* Buttons */}
                    <div className="hidden-scrollbar flex gap-3 overflow-auto">
                        <NavigationMobileMenu
                            variant={{ color: variant.color }}
                            className="md:hidden"
                            links={navbarData.links}
                        />
                        <Button
                            variant={{ style: "secondary", color: "blue" }}
                            className="hidden px-3 py-0 md:flex"
                            href="https://go.wdcc.co.nz"
                        >
                            {/* I probably shouldnt use CSS transforms to scale this down but whatever lol */}
                            <div className="scale-[80%] fill-blue-700">
                                <social.linktree />
                            </div>
                        </Button>
                        <Button
                            variant={{ style: "primary", color: "blue" }}
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf9p1n1GpuuFxXbhx_7iWDQkDqRpxVDAjUOeyyzYeavC6d48A/viewform?usp=sharing"
                            className="hidden items-center leading-none md:flex"
                            newTab
                        >
                            <span className="py-1">Join WDCC</span> <Arrow />
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

const containerVariant = (toggle: boolean) => {
    return {
        initial: { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
        animate: {
            clipPath: toggle
                ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
    };
};
