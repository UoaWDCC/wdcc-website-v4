"use client";

import { motion, Variants } from "motion/react";

import ImageFit, { ImageFitProps } from "@/components/ImageFit";
import { cn } from "@/libs/utils";

export const SponsorCardTest = ImageFit;

interface SponsorCardTest2Props extends ImageFitProps {
    color: string;
}

export const SponsorCardTest2 = ({ color, ...image }: SponsorCardTest2Props) => {
    return (
        <div className="relative overflow-hidden rounded-xl bg-white p-4 px-8 shadow-lg">
            <div className={cn("absolute left-0 top-0 h-1 w-full bg-yellow-brand", color)} />
            <div className={cn("absolute bottom-0 left-0 h-1 w-full bg-yellow-brand", color)} />
            <ImageFit {...image} />
        </div>
    );
};

export const SponsorCardTest3 = ({ color, ...image }: SponsorCardTest2Props) => {
    return (
        <motion.div
            initial="hide"
            whileHover="show"
            className={cn("relative cursor-pointer rounded-xl bg-gray-20 p-4 px-8 shadow-lg backdrop-blur-md", color)}
        >
            <motion.p
                variants={textvariants}
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center font-bold drop-shadow-[0px_0px_4px_white]"
            >
                Sponsor
            </motion.p>
            <motion.div variants={imagevariants}>
                <ImageFit {...image} />
            </motion.div>
        </motion.div>
    );
};

const textvariants: Variants = {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } },
};

const imagevariants: Variants = {
    hide: { scale: 1, filter: "blur(0px)" },
    show: { scale: 0.8, filter: "blur(4px)", transition: { duration: 0.2, ease: "easeInOut" } },
};
