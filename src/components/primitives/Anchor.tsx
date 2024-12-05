"use client";

import React, { AnchorHTMLAttributes } from "react";
import { HTMLMotionProps, motion, MotionProps } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/libs/utils";

const anchor = tv({
    base: "flex items-center justify-center whitespace-nowrap",
    variants: {
        color: {
            ghost: "bg-transparent text-black",
            primary: "bg-blue-500 text-white",
            secondary: "bg-yellow-300 text-white",
            icon: "flex items-center justify-center rounded-full bg-blue-950 px-4 py-2.5",
        },
    },
    defaultVariants: {
        color: "primary",
    },
});

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    set?: VariantProps<typeof anchor>;
}

const Anchor = ({ set, ...props }: AnchorProps) => {
    return (
        <a {...props} className={cn(anchor(set), props.className)}>
            {props.children}
        </a>
    );
};

interface MotionAnchorProps extends MotionProps, HTMLMotionProps<"a"> {
    set?: VariantProps<typeof anchor>;
}

const MotionAnchor = ({ set, ...props }: MotionAnchorProps) => {
    return (
        <motion.a {...props} className={cn(anchor(set), props.className)}>
            {props.children}
        </motion.a>
    );
};

export { Anchor, MotionAnchor };
