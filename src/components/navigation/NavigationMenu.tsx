"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/libs/utils";
import { Button } from "../primitives/Button";
import { FullLink } from "./NavigationBar";

// ONLY USE CLASSNAME TO CHANGE MEDIA QUERY
const NavigationMenu = ({ links, className }: { links: FullLink[]; className?: string }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <Button set={{ color: "icon" }} className={cn("", className)} onClick={handleToggle}>
                Menu
            </Button>
            <motion.div
                className={cn(
                    "bg-blue-900/80 absolute left-0 top-0 z-[999] h-full w-full px-10 pt-8 text-white backdrop-blur-lg",
                    className
                )}
                initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
                animate={{
                    clipPath: toggle
                        ? "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
                        : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            >
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex w-full justify-center">
                        <strong className="text-xl font-semibold">Explore</strong>
                    </div>
                    <hr className="w-1/2 bg-white" />
                    <div className="my-8 flex flex-col">
                        {links.map((link) => (
                            <a key={link.label} href={link.href} className="w-full text-center text-[15vw]">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <Button
                        set={{ color: "icon" }}
                        className="flex w-1/2 justify-center border border-white/20"
                        onClick={handleToggle}
                    >
                        <svg
                            className="size-12"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </Button>
                </div>
            </motion.div>
        </>
    );
};

export default NavigationMenu;
