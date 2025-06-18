"use client";

import { HTMLMotionProps, MotionProps, Variants, motion } from "motion/react";
import { textVariantDefault } from "@/components/old/text/animatedTextVariants";
import { cn } from "@/utils/misc";

type HTMLAtrributeNoMotion<T extends keyof HTMLElementTagNameMap> = Omit<HTMLMotionProps<T>, keyof MotionProps>;

type TextProps = {
    text: string;
    type?: "char" | "word";
    variants?: Variants;
    debug?: boolean;
} & HTMLAtrributeNoMotion<"p">;

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
