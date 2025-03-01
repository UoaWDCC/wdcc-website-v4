import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

import { SponsorSectionType } from "@/types/pages/HeroPage";

import { Button } from "@/components/primitives/Button";
import { cn } from "@/libs/utils";

import SponsorCard from "./sponsor/SponsorCard";

interface SponsorSectionProps {
    SponsorSection: SponsorSectionType;
}

export const SponsorSection = ({ SponsorSection }: SponsorSectionProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-balance text-3xl font-bold leading-none">Our sponsors for 2025</h2>
            <div className="flex w-full flex-col items-center justify-center">
                {/* horror*/}
                {/* it's a nightmare */}
                {(Object.keys(SponsorSection) as SponsorTierKeys[]).map((tier, i) => (
                    <>
                        <SponsorLabel key={`label-${tier}-${i}`} tier={tier} className="mt-8" />
                        <div
                            key={`cards-${tier}-${i}`}
                            className="responsive-grid mt-6 grid w-full flex-col place-content-center place-items-center gap-2 md:gap-4"
                        >
                            {SponsorSection[tier].sponsors.map(({ src, alt }, i) => (
                                <SponsorCard
                                    key={`sponsor-${tier}-${i}`}
                                    tier={tier}
                                    src={src}
                                    alt={alt}
                                    width="150px"
                                    height="100px"
                                />
                            ))}
                        </div>
                    </>
                ))}
                <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                    <p>Interested in sponsoring us?</p>
                    <Button href="mailto:outreach@wdcc.co.nz" variant={{ style: "tertiary", color: "dark" }}>
                        Send us an email!
                    </Button>
                </div>
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
    tier: SponsorTierKeys;
}

const SponsorLabel = ({ tier, ...props }: SponsorLabelProps) => {
    return (
        <div {...props} className={cn(sponsorLabel({ tier: tier }), props.className)}>
            {tier} sponsor
        </div>
    );
};

// Ensure TypeScript correctly recognizes the keys
export type SponsorTierKeys = keyof SponsorSectionType;
