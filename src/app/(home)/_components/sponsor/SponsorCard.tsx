"use client";

import React from "react";
import { motion, Variants } from "motion/react";

import ImageFit, { ImageFitProps } from "@/components/ImageFit";
import { easeOutExpo } from "@/libs/ease";
import { cn } from "@/libs/utils";

interface SponsorCardProps extends ImageFitProps {
    color: string;
}

const SponsorCard = ({ color, ...image }: SponsorCardProps) => {
    return (
        <motion.div
            initial="hide"
            whileHover="show"
            className="relative cursor-pointer overflow-hidden rounded-xl bg-white p-4 px-8 shadow-lg"
        >
            <div className={cn("absolute left-0 top-0 h-1 w-full bg-yellow-brand", color)} />
            <div className={cn("absolute bottom-0 left-0 h-1 w-full bg-yellow-brand", color)} />
            <motion.p
                variants={textvariants}
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center font-bold drop-shadow-[0px_0px_4px_white]"
                transition={{ duration: 1, ease: easeOutExpo }}
            >
                Sponsor
            </motion.p>
            <motion.div variants={imagevariants} transition={{ duration: 1, ease: easeOutExpo }}>
                <ImageFit {...image} />
            </motion.div>
        </motion.div>
    );
};

// experimental

const textvariants: Variants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
};

const imagevariants: Variants = {
    hide: { scale: 1, filter: "blur(0px)" },
    show: { scale: 0.8, filter: "blur(4px)" },
};

export default SponsorCard;
