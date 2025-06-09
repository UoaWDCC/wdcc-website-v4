import { HTMLAttributes } from "react";

import { tv } from "tailwind-variants";

import { SponsorSectionType } from "@/types/pages/HeroPage";

import { Button } from "@/components/primitives/Button";
import { cn } from "@/libs/utils";

import SponsorCard from "./sponsor/SponsorCard";

type SponsorSectionProps = {
    SponsorSection: SponsorSectionType;
};

export const SponsorSection = ({ SponsorSection }: SponsorSectionProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-3xl leading-none font-bold text-balance">Our sponsors for 2025</h2>
            <div className="flex w-full flex-col items-center justify-center">
                {(Object.keys(SponsorSection) as SponsorTierKeys[])
                    .filter((tier) => SponsorSection[tier].sponsors.length > 0)
                    .map((tier, i) => (
                        <div key={`${tier}-${i}`} className="flex w-full flex-col items-center">
                            <SponsorLabel tier={tier} count={SponsorSection[tier].sponsors.length} className="mt-8" />
                            <div className="responsive-grid mt-6 grid w-full flex-col place-content-center place-items-center gap-2 md:gap-4">
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
                        </div>
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
    base: "rounded-full border-2 px-4 font-semibold whitespace-nowrap",
    variants: {
        tier: {
            gold: "bg-sponsor-gold border-yellow-400",
            tech: "bg-sponsor-tech border-purple-200",
            silver: "bg-sponsor-silver border-gray-200",
            community: "bg-sponsor-community border-green-200",
        },
    },
    defaultVariants: {
        tier: "gold",
    },
});

type SponsorLabelProps = {
    tier: SponsorTierKeys;
    count: number;
} & HTMLAttributes<HTMLDivElement>;

const SponsorLabel = ({ tier, count, ...props }: SponsorLabelProps) => {
    return (
        <div {...props} className={cn(sponsorLabel({ tier: tier }), props.className)}>
            {tier} {count === 1 ? "sponsor" : "sponsors"}
        </div>
    );
};

// Ensure TypeScript correctly recognizes the keys
export type SponsorTierKeys = keyof SponsorSectionType;
