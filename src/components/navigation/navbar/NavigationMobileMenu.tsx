"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { tv, VariantProps } from "tailwind-variants";

//import websterBL from "@/assets/image/webster-blue.png"
import websterCL from "@/assets/image/webster-color.png";
import Arrow from "@/assets/svg/Arrow";
import ExitIcon from "@/assets/svg/ExitIcon";
import MenuIcon from "@/assets/svg/MenuIcon";
import { social } from "@/assets/svg/socials";
import WDCCLogo from "@/assets/svg/WDCCLogo";
import { Anchor } from "@/components/primitives/Anchor";
import { Button } from "@/components/primitives/Button";
import { cn } from "@/libs/utils";

import type { NavigationLink } from "./_data/navbarTypes";

const mobileNav = tv({
    base: "transition duration-300",
    variants: {
        color: {
            dark: "stroke-background hover:stroke-blue-200",
            light: "stroke-foreground hover:stroke-blue-600",
        },
    },
});

export type NavbarProps = {
    variant?: VariantProps<typeof mobileNav>;
    className?: string;
    links: NavigationLink[];
};

// ONLY USE CLASSNAME TO CHANGE MEDIA QUERY
const NavigationMobileMenu = ({ links, className, variant }: NavbarProps) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    // Blue Webster or Color Webster? Randomly assigns. Maybe?
    /*
    let webster;
    const rand = Math.floor(Math.random() * 2);
    if(rand > 0) webster = websterBL;
    webster = websterCL;
    */
    const webster = websterCL;
    //please remove ASAP
    const hslaColor = "hsla(217, 80%, 50%, 0.9)";
    return (
        <>
            <button className={cn("", className, mobileNav({ ...variant }))} onClick={handleToggle}>
                <MenuIcon />
            </button>
            {/* TODO ASHTON: this should lock scrolling from happening */}

            <motion.div
                className={cn("fixed top-0 left-0 h-screen w-full px-8 py-4 backdrop-blur-lg", className)}
                //please remove ASAP
                style={{ backgroundColor: hslaColor }}
                // animation to make it look like it's opening/closing
                initial="initial"
                animate="animate"
                variants={containerVariant(toggle)}
            >
                <div className="flex flex-col items-start gap-4">
                    <div className="flex w-full items-center justify-between">
                        <Anchor href="/">
                            <WDCCLogo className="fill-white transition duration-150 hover:opacity-70 lg:block" />
                        </Anchor>
                        <button onClick={handleToggle}>
                            <ExitIcon className="stroke-white transition duration-300 hover:stroke-blue-200" />
                        </button>
                    </div>

                    <div className="h-[2px] w-full rounded-full bg-gray-100/25" />

                    <div className="my-2 flex w-full flex-col divide-y-2 divide-dashed divide-gray-100/25 text-white">
                        <NavigationMenuLinks links={links} />
                    </div>
                    <Button
                        variant={{ style: "tertiary", color: "dark", isJustified: true }}
                        className=""
                        href="https://go.wdcc.co.nz"
                    >
                        {/* I probably shouldnt use CSS transforms to scale this down but whatever lol */}
                        <div className="scale-[80%] fill-blue-100">
                            <social.linktree />
                        </div>
                    </Button>
                    <Button
                        variant={{ style: "secondary", color: "light", isJustified: true }}
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9p1n1GpuuFxXbhx_7iWDQkDqRpxVDAjUOeyyzYeavC6d48A/viewform?usp=sharing"
                    >
                        Join WDCC <Arrow />
                    </Button>

                    {/*
                    <p className="w-full text-white/50 text-xs font-light text-center">miku oo ee oo</p>
                    */}

                    <div className="flex w-full flex-col">
                        <Image
                            alt="webster, the WDCC mascot"
                            className="mx-auto my-8 w-[80%] opacity-50"
                            src={webster}
                            width={1312}
                            height={1171}
                        ></Image>
                        <p className="w-full text-center text-xs font-light text-white/50">
                            Meet Webster, the WDCC mascot.
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default NavigationMobileMenu;

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

const NavigationMenuLinks = ({ links }: { links: NavigationLink[] }) =>
    links.map((link) => (
        <Link
            key={link.label}
            href={link.href}
            className="group/item w-full py-4 text-2xl leading-none font-semibold hover:duration-200"
        >
            <p className="transition duration-500 group-hover/item:translate-x-3 group-hover/item:text-blue-100 group-hover/item:duration-200">
                {link.label}
            </p>
        </Link>
    ));
