"use client";

import React, { HTMLAttributes } from "react";
import { HTMLMotionProps, motion, MotionProps } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/libs/utils";

const anchor = tv({
    base: "w-full p-2 px-6",
    variants: {
        color: {
            ghost: "bg-transparent text-white",
            primary: "bg-blue-500 text-white",
            secondary: "bg-yellow-300 text-white",
        },
    },
    defaultVariants: {
        color: "primary",
    },
});

interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
    set?: VariantProps<typeof anchor>;
}

const Button = ({ set, ...props }: ButtonProps) => {
    return (
        <a {...props} className={cn(anchor(set), props.className)}>
            {props.children}
        </a>
    );
};

interface MotionButtonProps extends MotionProps, HTMLMotionProps<"a"> {
    set?: VariantProps<typeof anchor>;
}

const MotionButton = ({ set, ...props }: MotionButtonProps) => {
    return (
        <motion.a {...props} className={cn(anchor(set), props.className)}>
            {props.children}
        </motion.a>
    );
};

export { Button, MotionButton };
