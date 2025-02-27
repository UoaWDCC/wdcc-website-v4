"use client";

import React from "react";
import { motion } from "motion/react";

import { cn } from "@/libs/utils";

interface DrawProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}

const Draw = ({ children, ...props }: DrawProps) => {
    return (
        <span {...props} className={cn("relative whitespace-nowrap", props.className)}>
            <svg
                className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
                width="199"
                height="44"
                viewBox="0 0 199 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    strokeWidth={2}
                    d="M185.771 1.14346C185.771 1.14346 1 -1.87867 1 19.8193C1 41.5172 178.957 57.1659 197.349 23.3599C210.249 -0.351301 27.2328 1.14337 27.2328 1.14337"
                    stroke="#FFD166"
                />
            </svg>
            {children}
        </span>
    );
};

export default Draw;
