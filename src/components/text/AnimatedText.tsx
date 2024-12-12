"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

import { HTMLAtrributeNoMotion } from "@/types/motion";

import { textVariantDefault } from "@/data/variants/text";
import { cn } from "@/libs/utils";

interface TextProps extends HTMLAtrributeNoMotion<"p"> {
    text: string;
    type?: "char" | "word";
    variants?: Variants;
    debug?: boolean;
}

const AnimatedText = ({ text, type = "word", variants = textVariantDefault, debug, ...props }: TextProps) => {
    if (debug) {
        console.log(text, type);
        console.log(text.split(type === "char" ? "" : " "));
    }

    return (
        <motion.p
            {...props}
            className={cn("flex whitespace-pre", props.className)}
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
        >
            {text.split(type === "char" ? "" : " ").map((value, i) => (
                <motion.span className="block" key={i} variants={variants}>
                    {value}
                    {type === "word" && " "}
                </motion.span>
            ))}
        </motion.p>
    );
};

export default AnimatedText;
