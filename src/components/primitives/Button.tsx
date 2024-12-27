"use client";

import React, { HTMLAttributes } from "react";
import { HTMLMotionProps, motion, MotionProps } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/libs/utils";

const button = tv(
    {
        base: "w-full rounded-full p-2 px-6",
        variants: {
            type: {
                primary: "border-2",
                secondary: "",
                ghost: "border-2",
                icon: "bg-blue-900 text-white",
            },
            color: {
                blue: "bg-blue-brand",
                yellow: "bg-yellow-brand",
                purple: "bg-purple-brand",
                gray: "bg-gray-800",
                white: "bg-white",
                none: "",
            },
        },
        compoundVariants: [
            // primary
            {
                type: ["primary"],
                color: ["blue"],
                className: "border-blue-500 text-white",
            },
            {
                type: ["primary"],
                color: ["yellow"],
                className: "border-yellow-500 text-gray-900",
            },
            {
                type: ["primary"],
                color: ["purple"],
                className: "border-purple-400 text-white",
            },
            {
                type: ["primary"],
                color: ["gray"],
                className: "border-gray-500 text-white",
            },
            // secondary, ghost
            {
                type: ["secondary", "ghost"],
                color: ["blue"],
                className: "border-blue-200 bg-blue-100 text-blue-750",
            },
            {
                type: ["secondary", "ghost"],
                color: ["yellow"],
                className: "border-yellow-200 bg-yellow-100 text-blue-750",
            },
            {
                type: ["secondary", "ghost"],
                color: ["purple"],
                className: "border-purple-200 bg-purple-100 text-blue-750",
            },
            {
                type: ["secondary", "ghost"],
                color: ["gray"],
                className: "border-gray-200 bg-gray-100 text-blue-800",
            },
            {
                type: ["ghost"],
                className: "bg-transparent",
            },
        ],
        defaultVariants: {
            type: "primary",
            color: "blue",
        },
    },
    { twMerge: true }
);

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
