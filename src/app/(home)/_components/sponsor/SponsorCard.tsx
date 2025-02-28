import React from "react";

import { SponsorTierKeys } from "@/assets/image/sponsors";
import ImageFit, { ImageFitProps } from "@/components/ImageFit";

const tierWidth: Record<SponsorTierKeys, number> = {
    gold: 250,
    tech: 250,
    silver: 150,
    community: 150,
};

interface SponsorCardProps extends ImageFitProps {
    tier: SponsorTierKeys;
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
