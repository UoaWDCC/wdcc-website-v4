import React from "react";

import { sponsors } from "@/assets/image/sponsors";
import SectionHeader from "@/components/section/SectionHeader";

import SponsorCard from "./sponsor/SponsorCard";

export const SponsorSection = () => {
    return (
        <div className="mt-24 flex w-[clamp(300px,100%,800px)] flex-col items-center gap-8 px-4">
            <SectionHeader>WDCC Sponsors for 2025</SectionHeader>
            <div className="flex gap-8">
                {sponsors.gold.map((logo, i) => (
                    <SponsorCard color="bg-sponsor-gold" src={logo} alt={logo} width="250px" key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsors.tech.map((logo, i) => (
                    <SponsorCard color="bg-sponsor-tech" src={logo} alt={logo} width="150px" key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsors.silver.map((logo, i) => (
                    <SponsorCard color="bg-sponsor-silver" src={logo} alt={logo} key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsors.community.map((logo, i) => (
                    <SponsorCard color="bg-sponsor-community" src={logo} alt={logo} key={i} />
                ))}
            </div>
        </div>
    );
};

export default SponsorCard;
