"use client";

import { AnchorHTMLAttributes, ReactNode, useState } from "react";
import Link, { LinkProps } from "next/link";
import { motion, type Variants } from "framer-motion";

import type { NavigationLink } from "@/types/navigation";

import { cn } from "@/libs/utils";

// Need to omit href from AnchorHTMLAttributes because it conflicts with Next LinkProps
interface DropdownProps extends LinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    link: NavigationLink;
}

export default function DropDown({ link, ...props }: DropdownProps) {
    const [open, setOpen] = useState(false);

    const HoverOn = () => {
        setOpen(true);
    };

    const HoverOff = () => {
        setOpen(false);
    };

    return (
        <motion.div className="relative flex flex-col gap-4" onHoverStart={HoverOn} onHoverEnd={HoverOff}>
            {/* Main link in navbar */}
            <BracketLink {...props} className={cn("whitespace-nowrap", props.className)} open={open}>
                {link.label}
            </BracketLink>

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
}

// Need to omit href from AnchorHTMLAttributes because it conflicts with Next LinkProps
interface BracketLinkProps extends LinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    children: ReactNode;
    open?: boolean;
    newTab?: boolean;
}

const BracketLink = ({ children, newTab, open, ...props }: BracketLinkProps) => {
    return (
        <Link {...props} target={newTab ? "_blank" : "_self"}>
            <div className={cn("relative z-10 flex items-center", props.className)}>
                <p className="cursor-pointer whitespace-nowrap">
                    <span className={cn("inline-block -translate-x-1 transition-transform", open && "translate-x-0")}>
                        (
                    </span>
                    {children}
                    <span className={cn("inline-block translate-x-1 transition-transform", open && "translate-x-0")}>
                        )
                    </span>
                </p>
            </div>
        </Link>
    );
};

function DropDownSublink({ link, open }: { link: NavigationLink; open: boolean }) {
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
                <div className="absolute bottom-1 left-0 h-0.5 w-0 rounded bg-gray-700 transition-[width] group-hover:w-1/2" />
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