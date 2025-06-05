"use client";

import { AnchorHTMLAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { motion, type Variants } from "motion/react";

import type { NavigationLink } from "@/components/navigation/navbar/_data/navbarTypes";
import { cn } from "@/libs/utils";

import { useNavHover } from "./NavigationBar";

// Need to omit href from AnchorHTMLAttributes because it conflicts with Next LinkProps
type DropdownProps = {
    link: NavigationLink;
} & LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

export default function DropDown({ link, ...props }: DropdownProps) {
    const { isHovering, handleDropEnter } = useNavHover();

    return (
        <motion.div className="relative flex flex-col gap-4">
            {/* Main link in navbar */}
            <BracketLink
                {...props}
                onPointerEnter={handleDropEnter}
                className={cn("whitespace-nowrap", props.className)}
            >
                {link.label}
            </BracketLink>

            {/* Dropdown links */}
            {link.drop && (
                <motion.div
                    initial="hide"
                    animate={isHovering ? "show" : "hide"}
                    className="absolute flex flex-col pt-8 whitespace-pre"
                    transition={{ staggerChildren: 1 }}
                    variants={containerVariant}
                >
                    {link.drop.map((link) => (
                        <DropDownSublink key={link.label} link={link} open={isHovering} />
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
}

// Need to omit href from AnchorHTMLAttributes because it conflicts with Next LinkProps
type BracketLinkProps = {
    children: ReactNode;
    newTab?: boolean;
} & LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

const BracketLink = ({ children, newTab, ...props }: BracketLinkProps) => {
    return (
        <Link {...props} className="group/link" target={newTab ? "_blank" : "_self"}>
            <div className={cn("relative z-10 flex items-center", props.className)}>
                <p className="cursor-pointer whitespace-nowrap">
                    <span className="inline-block -translate-x-1 transition-transform group-hover/link:translate-x-0!">
                        (
                    </span>
                    {children}
                    <span className="inline-block translate-x-1 transition-transform group-hover/link:translate-x-0!">
                        )
                    </span>
                </p>
            </div>
        </Link>
    );
};

// Adapted from src/components/navigation/UnderlineLink.tsx
function DropDownSublink({ link, open }: { link: NavigationLink; open: boolean }) {
    return (
        <Link key={link.label} href={link.href}>
            <motion.div
                initial="hide"
                animate={open ? "show" : "hide"}
                className="group/link relative cursor-pointer opacity-70 transition-[padding-left] *:*:inline-block *:inline-block hover:pl-1 hover:opacity-100"
            >
                {/* Per-letter animation */}
                {link.label.split("").map((char, i) => (
                    <motion.span key={i} className="overflow-hidden">
                        <motion.span variants={LetterVariant}>{char}</motion.span>
                    </motion.span>
                ))}
                <div className="absolute bottom-1 left-0 h-0.5 w-0 rounded-sm bg-gray-700 transition-[left,width] group-hover/link:left-1 group-hover/link:w-1/2" />
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
            delay: 0.1,
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
