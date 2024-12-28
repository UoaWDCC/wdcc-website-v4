"use client";

import { useState, type HTMLAttributes } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import type { NavigationLinkType } from "@/types/navigation";

import { PageLink } from "@/components/navigation/PageLink";
import { cn } from "@/libs/utils";

interface DropdownProps extends HTMLAttributes<HTMLAnchorElement> {
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
        // Jesus-
        <motion.div className="relative flex flex-col gap-4" onHoverStart={HoverOn} onHoverEnd={HoverOff}>
            {/* Main link in navbar */}
            <PageLink key={link.label} href={link.href} className={cn("whitespace-nowrap", props.className)}>
                {link.label}
            </PageLink>

            {/* Dropdown links */}
            {link.drop && (
                <motion.div
                    initial="hide"
                    animate={open ? "show" : "hide"}
                    className="absolute flex flex-col whitespace-pre pt-8"
                    transition={{ staggerChildren: 1 }}
                    variants={containerVariant}
                >
                    {link.drop.map((link) => (
                        <DropDownSublink key={link.label} link={link} open={open} />
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

function DropDownSublink({ link, open }: { link: NavigationLinkType; open: boolean }) {
    return (
        <Link key={link.label} href={link.href}>
            <motion.div
                initial="hide"
                animate={open ? "show" : "hide"}
                className="group relative cursor-pointer transition-[padding-left] *:*:inline-block *:inline-block hover:pl-1"
            >
                {/* Per-letter animation */}
                {link.label.split("").map((char, i) => (
                    <motion.span key={i} className="overflow-hidden">
                        <motion.span variants={LetterVariant}>{char}</motion.span>
                    </motion.span>
                ))}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-[width] group-hover:w-1/2" />
            </motion.div>
        </Link>
    );
}

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