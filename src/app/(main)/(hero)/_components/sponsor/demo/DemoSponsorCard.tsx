"use client";

import ImageFit, { ImageFitProps } from "@/components/old/ImageFit";
import { cn } from "@/utils/misc";
import { Variants, motion } from "motion/react";

export const SponsorCardTest = ImageFit;

type SponsorCardTest2Props = {
    color: string;
} & ImageFitProps;

export const SponsorCardTest2 = ({ color, ...image }: SponsorCardTest2Props) => {
    return (
        <div className="relative overflow-hidden rounded-xl bg-white p-4 px-8 shadow-lg">
            <div className={cn("bg-yellow-brand absolute top-0 left-0 h-1 w-full", color)} />
            <div className={cn("bg-yellow-brand absolute bottom-0 left-0 h-1 w-full", color)} />
            <ImageFit {...image} />
        </div>
    );
};

export const SponsorCardTest3 = ({ color, ...image }: SponsorCardTest2Props) => {
    return (
        <motion.div
            initial="hide"
            whileHover="show"
            className={cn("bg-gray-20 relative cursor-pointer rounded-xl p-4 px-8 shadow-lg backdrop-blur-md", color)}
        >
            <motion.p
                variants={textvariants}
                className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center font-bold drop-shadow-[0px_0px_4px_white]"
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
