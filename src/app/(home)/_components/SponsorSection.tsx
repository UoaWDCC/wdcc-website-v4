import React, { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

import { sponsors, SponsorTierKeys } from "@/assets/image/sponsors";
import { cn } from "@/libs/utils";

import SponsorCard from "./sponsor/SponsorCard";

export const SponsorSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-balance text-3xl font-bold leading-none">Our sponsors for 2025</h2>
            <div className="flex w-full flex-col items-center justify-center">
                {/* horror */}
                {(Object.keys(sponsors) as Array<SponsorTierKeys>).map((tier) => (
                    <>
                        <SponsorLabel tier={tier} className="mt-8" />
                        <div
                            className="responsive-grid mt-6 grid w-full flex-col place-content-center place-items-center gap-2 md:gap-4"
                            key={tier}
                        >
                            {sponsors[tier].map((logo, i) => (
                                <SponsorCard tier={tier} src={logo} alt={logo} width="150px" height="100px" key={i} />
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

const sponsorLabel = tv({
    base: "whitespace-nowrap rounded-full border-2 px-4 font-semibold",
    variants: {
        tier: {
            gold: "border-yellow-400 bg-sponsor-gold",
            tech: "border-purple-200 bg-sponsor-tech",
            silver: "border-gray-200 bg-sponsor-silver",
            community: "border-green-200 bg-sponsor-community",
        },
    },
    defaultVariants: {
        tier: "gold",
    },
});

interface SponsorLabelProps extends HTMLAttributes<HTMLDivElement> {
    tier: keyof typeof sponsors;
}

const SponsorLabel = ({ tier, ...props }: SponsorLabelProps) => {
    return (
        <div {...props} className={cn(sponsorLabel({ tier: tier }), props.className)}>
            {tier} sponsor
        </div>
    );
};

export default SponsorCard;
