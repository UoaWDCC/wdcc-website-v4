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
    gold: 250,
    tech: 250,
    silver: 150,
    community: 150,
};

type TierKeys = VariantProps<typeof line>["tier"];

interface SponsorCardProps extends ImageFitProps {
    tier: TierKeys;
}
const SponsorCard = ({ tier, ...image }: SponsorCardProps) => {
    return (
        <ImageFit
            {...image}
            width={`${tierWidth[tier || "gold"]}px`}
            className="drop-shadow-[0px_0px_8px_var(--background)]"
        />
    );
};

export default SponsorCard;
