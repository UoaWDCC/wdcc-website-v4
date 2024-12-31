import React from "react";

import { sponsorsCommunity, sponsorsGold, sponsorsSilver, sponsorsTech } from "@/assets/image/sponsors";
import ImageFit from "@/components/ImageFit";
import SectionHeader from "@/components/section/SectionHeader";

const SponsorSection = () => {
    return (
        <div className="mt-24 flex w-[clamp(300px,100%,800px)] flex-col items-center gap-8 px-4">
            <SectionHeader>WDCC Sponsors for 2025</SectionHeader>
            <div className="flex gap-8">
                {sponsorsGold.map((logo, i) => (
                    <ImageFit src={logo} alt={logo} width="250px" key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsorsTech.map((logo, i) => (
                    <ImageFit src={logo} alt={logo} width="150px" key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsorsSilver.map((logo, i) => (
                    <ImageFit src={logo} alt={logo} key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsorsCommunity.map((logo, i) => (
                    <ImageFit src={logo} alt={logo} key={i} />
                ))}
            </div>
        </div>
    );
};

export default SponsorSection;
