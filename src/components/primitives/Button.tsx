"use client";

import React, { HTMLAttributes } from "react";
import { HTMLMotionProps, motion, MotionProps } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/libs/utils";

const button = tv({
    base: "w-full rounded-full border-4 border-black/20 p-2 px-6",
    variants: {
        color: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-yellow-300 text-white",
            icon: "bg-blue-950",
        },
    },
    defaultVariants: {
        color: "primary",
    },
});

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    set?: VariantProps<typeof button>;
}

const Button = ({ set, ...props }: ButtonProps) => {
    return (
        <button {...props} className={cn(button(set), props.className)}>
            {props.children}
        </button>
    );
};

interface MotionButtonProps extends MotionProps, HTMLMotionProps<"button"> {
    set?: VariantProps<typeof button>;
}

const MotionButton = ({ set, ...props }: MotionButtonProps) => {
    return (
        <motion.button {...props} className={cn(button(set), props.className)}>
            {props.children}
        </motion.button>
    );
};

export { Button, MotionButton };
