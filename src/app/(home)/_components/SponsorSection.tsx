import React from "react";

import { sponsors } from "@/assets/image/sponsors";

import SponsorCard from "./sponsor/SponsorCard";

export const SponsorSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <h2 className="text-balance text-3xl font-bold leading-none">Our sponsors for 2025</h2>
            <div className="flex flex-col items-center justify-center gap-6">
                {/* horror */}
                {(Object.keys(sponsors) as Array<keyof typeof sponsors>).map((tier) => (
                    <div className="flex flex-wrap justify-center gap-4" key={tier}>
                        {sponsors[tier].map((logo, i) => (
                            <SponsorCard tier={tier} src={logo} alt={logo} width="150px" key={i} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorCard;
