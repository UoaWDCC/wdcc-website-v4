"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { tv, VariantProps } from "tailwind-variants";

import ImageFit, { ImageFitProps } from "@/components/ImageFit";
import { easeOutExpo } from "@/libs/ease";

const line = tv({
    base: "absolute h-1 w-full",
    variants: {
        position: {
            top: "left-0 top-0",
            bottom: "bottom-0 left-0",
        },
        tier: {
            gold: "bg-sponsor-gold",
            tech: "bg-sponsor-tech",
            silver: "bg-sponsor-silver",
            community: "bg-sponsor-community",
        },
    },
    defaultVariants: {
        tier: "gold",
    },
});

const tierWidth: Record<Exclude<TierKeys, undefined>, number> = {
    gold: 200,
    tech: 200,
    silver: 150,
    community: 150,
};

type TierKeys = VariantProps<typeof line>["tier"];

interface SponsorCardProps extends ImageFitProps {
    tier: TierKeys;
}
const SponsorCard = ({ tier, ...image }: SponsorCardProps) => {
    return (
        <motion.div
            initial="hide"
            whileHover="show"
            className="relative cursor-pointer overflow-hidden bg-white p-4 px-6 shadow-lg"
        >
            <div className={line({ position: "top", tier: tier })} />
            <div className={line({ position: "bottom", tier: tier })} />
            <motion.p
                variants={textvariants}
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center font-bold drop-shadow-[0px_0px_4px_white]"
                transition={{ duration: 1, ease: easeOutExpo }}
            >
                Sponsor
            </motion.p>
            <motion.div variants={imagevariants} transition={{ duration: 1, ease: easeOutExpo }}>
                {/* wow this is awful, might be the worst code i've ever written 😭 oh well it's 2 a.m. */}
                <ImageFit {...image} width={`${tierWidth[tier || "gold"]}px`} />
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
