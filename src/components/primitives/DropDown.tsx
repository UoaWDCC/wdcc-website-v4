"use client";

import React, { useState, type HTMLAttributes } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import type { NavigationLinkType } from "@/types/navigation";

import { cn } from "@/libs/utils";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    link: NavigationLinkType;
}

const DropDown = ({ link, ...props }: DropdownProps) => {
    const [open, setOpen] = useState(false);

    const HoverOn = () => {
        setOpen(true);
    };

    const HoverOff = () => {
        setOpen(false);
    };
    return (
        // xd unreadable code sorry not sorry, can't fire me this way
        <motion.div className="relative z-10 flex flex-col gap-4" onHoverStart={HoverOn} onHoverEnd={HoverOff}>
            <div {...props} className={cn("relative z-10 flex items-center", props.className)}>
                <p className="cursor-pointer whitespace-nowrap">
                    <span className={cn("inline-block -translate-x-1 transition-transform", open && "translate-x-0")}>
                        (
                    </span>
                    {link.label}
                    <span className={cn("inline-block translate-x-1 transition-transform", open && "translate-x-0")}>
                        )
                    </span>
                </p>
            </div>
            <motion.div
                initial="hide"
                animate={open ? "show" : "hide"}
                className="absolute z-50 flex flex-col whitespace-pre pt-8"
                transition={{ staggerChildren: 1 }}
                variants={containerVariant}
            >
                {link.drop!.map((link) => (
                    <Link key={link.label} href={link.href}>
                        <motion.div
                            initial="hide"
                            animate={open ? "show" : "hide"}
                            className="group relative cursor-pointer transition-[padding-left] *:*:inline-block *:inline-block hover:pl-1"
                        >
                            {link.label.split("").map((char, i) => (
                                <motion.span key={i} className="overflow-hidden">
                                    <motion.span variants={LetterVariant}>{char}</motion.span>
                                </motion.span>
                            ))}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-[width] group-hover:w-1/2" />
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </motion.div>
    );
};

const LetterVariant: Variants = {
    hide: {
        x: "-100%",
    },
    show: {
        x: 0,
        transition: {
            duration: 0.2,
        },
    },
};

const containerVariant: Variants = {
    hide: {
        display: "none",
    },
    show: {
        display: "flex",
    },
};

export default DropDown;
