import React from "react";

import { sponsors } from "@/assets/image/sponsors";
import { Button } from "@/components/primitives/Button";

import SponsorCard from "./sponsor/SponsorCard";

export const SponsorSection = () => {
    return (
        <div className="flex flex-col gap-12 items-center justify-center">
            <h2 className="text-3xl font-bold leading-none">
                Our sponsors for 2025
            </h2>
            <div className="flex flex-col gap-6 items-center justify-center">
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
            <div className="flex gap-4 items-center flex-col justify-center md:flex-row">
                <p>Interested in sponsoring us?</p>
                <Button variant={{style: "tertiary", color: "dark" }}>Learn more about sponsoring WDCC</Button>
            </div>

        </div>
    );
};

export default SponsorCard;
