"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

import { Anchor } from "@/components/primitives/Anchor";
import { cn } from "@/libs/utils";

import type { NavigationLink } from "./_data/navbarTypes";
import { Button } from "@/components/primitives/Button";
import MenuIcon from "@/assets/svg/MenuIcon";
import ExitIcon from "@/assets/svg/ExitIcon";
import Arrow from "@/assets/svg/Arrow";
import { tv, VariantProps } from "tailwind-variants";
import WDCCLogo from "@/assets/svg/WDCCLogo";
import Link from "next/link";
import { social } from "@/assets/svg/socials";

import websterBL from "@/assets/image/webster-blue.png"
import websterCL from "@/assets/image/webster-color.png"
import Image from "next/image";

const mobileNav = tv({
    base: "transition duration-300",
    variants: {
        color: {
            dark: "stroke-background hover:stroke-blue-200",
            light: "stroke-foreground hover:stroke-blue-600",
        },
    },
})

export interface NavbarProps {
    variant?: VariantProps<typeof mobileNav>;
    className?: string;
    links: NavigationLink[];
}

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

    return (
        <>
            <button className={cn("", className, mobileNav({...variant}))} onClick={handleToggle}>
                <MenuIcon/>
            </button>

            {/* todo: this should lock scrolling from happening */}

            <motion.div
                className={cn(
                    "fixed left-0 top-0 h-screen w-full bg-blue-500/90 px-8 py-4 backdrop-blur-lg",
                    className
                )}
                // animation to make it look like it's opening/closing
                initial="initial"
                animate="animate"
                variants={containerVariant(toggle)}
            >
                <div className="flex flex-col items-start gap-4">
                    <div className="flex w-full justify-between items-center">
                        <Anchor href="/">
                            <WDCCLogo className="fill-white transition duration-150 hover:opacity-70 lg:block" />
                        </Anchor>
                        <button onClick={handleToggle}>
                            <ExitIcon className="stroke-white transition duration-300 hover:stroke-blue-200" />
                        </button>
                    </div>

                    <div className="w-full rounded-full h-[2px] bg-gray-100/25" />

                    <div className="w-full flex flex-col my-2 text-white divide-y-2 divide-dashed divide-gray-100/25">
                        <NavigationMenuLinks links={links} />
                    </div>
                    <Button variant={{style: "tertiary", color: "dark", isJustified: true}} className="" href="https://go.wdcc.co.nz">

                        {/* I probably shouldnt use CSS transforms to scale this down but whatever lol */}
                        <div className="fill-blue-100 scale-[80%]">
                            <social.linktree />
                        </div>

                    </Button>
                    <Button variant={{style: "secondary", color: "light", isJustified: true}}>Join WDCC <Arrow/></Button>


                    {/*
                    <p className="w-full text-white/50 text-xs font-light text-center">miku oo ee oo</p>
                    */}

                    <div className="w-full flex flex-col">
                        <Image alt="webster, the WDCC mascot" className="w-[80%] my-8 mx-auto opacity-50" src={webster} width={1312}
                               height={1171}></Image>
                        <p className="w-full text-white/50 text-xs font-light text-center">Meet Webster, the WDCC mascot.</p>

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
        <Link key={link.label} href={link.href} className="w-full text-2xl font-semibold leading-none py-4 hover:duration-200 group/item">
            <p className="transition duration-500 group-hover/item:duration-200 group-hover/item:text-blue-100 group-hover/item:translate-x-3">{link.label}</p>
        </Link>
    ));
