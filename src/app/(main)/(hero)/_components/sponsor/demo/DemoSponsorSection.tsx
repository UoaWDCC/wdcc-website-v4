import { HTMLAttributes } from "react";
import { sponsorsCommunity, sponsorsGold, sponsorsSilver, sponsorsTech } from "@/assets/image/sponsors";
import SectionHeader from "@/components/layout/sections/SectionHeader";
import { cn } from "@/utils/misc";
import { SponsorCardTest, SponsorCardTest2, SponsorCardTest3 } from "./DemoSponsorCard";

export const SponsorSection = () => {
    return (
        <div className="mt-24 flex w-[clamp(300px,100%,800px)] flex-col items-center gap-8 px-4">
            <SectionHeader>WDCC Sponsors for 2025</SectionHeader>
            <div className="flex gap-8">
                {sponsorsGold.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} width="250px" key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsorsTech.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} width="150px" key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsorsSilver.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsorsCommunity.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} key={i} />
                ))}
            </div>
        </div>
    );
};

export const SponsorSection2 = () => {
    return (
        <div className="mt-24 flex w-[clamp(300px,100%,800px)] flex-col items-center gap-8 px-4">
            <SectionHeader>WDCC Sponsors for 2025</SectionHeader>
            <div className="flex gap-8">
                {sponsorsGold.map((logo, i) => (
                    <SponsorCardTest2 color="bg-sponsor-gold" src={logo} alt={logo} width="250px" key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsorsTech.map((logo, i) => (
                    <SponsorCardTest2 color="bg-sponsor-tech" src={logo} alt={logo} width="150px" key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsorsSilver.map((logo, i) => (
                    <SponsorCardTest2 color="bg-sponsor-silver" src={logo} alt={logo} key={i} />
                ))}
            </div>
            <div className="flex gap-8">
                {sponsorsCommunity.map((logo, i) => (
                    <SponsorCardTest2 color="bg-sponsor-community" src={logo} alt={logo} key={i} />
                ))}
            </div>
        </div>
    );
};

export const SponsorSection3 = () => {
    return (
        <div className="mt-24 flex w-[clamp(300px,100%,800px)] flex-col items-center gap-8 px-4">
            <SectionHeader>WDCC Sponsors for 2025</SectionHeader>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-gold">Gold Sponsor</SponsorLabel>
                {sponsorsGold.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} width="250px" key={i} />
                ))}
            </div>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-tech">Tech Sponsor</SponsorLabel>
                {sponsorsTech.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} width="150px" key={i} />
                ))}
            </div>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-silver">Silver Sponsor</SponsorLabel>
                {sponsorsSilver.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} key={i} />
                ))}
            </div>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-community">Community Sponsor</SponsorLabel>
                {sponsorsCommunity.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} key={i} />
                ))}
            </div>
        </div>
    );
};

export const SponsorSection4 = () => {
    return (
        <div className="mt-24 flex w-[clamp(300px,100%,800px)] flex-col gap-8 px-4">
            <SectionHeader>WDCC Sponsors for 2025</SectionHeader>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-gold">Gold Sponsor</SponsorLabel>
                {sponsorsGold.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} width="250px" key={i} />
                ))}
            </div>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-tech">Tech Sponsor</SponsorLabel>
                {sponsorsTech.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} width="125px" key={i} />
                ))}
            </div>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-silver">Silver Sponsor</SponsorLabel>
                {sponsorsSilver.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} width="100px" key={i} />
                ))}
            </div>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-community">Community Sponsor</SponsorLabel>
                {sponsorsCommunity.map((logo, i) => (
                    <SponsorCardTest src={logo} alt={logo} key={i} width="100px" />
                ))}
            </div>
        </div>
    );
};
export const SponsorSection5 = () => {
    return (
        <div className="mt-24 flex w-[clamp(300px,100%,800px)] flex-col gap-8 px-4">
            <SectionHeader>WDCC Sponsors for 2025</SectionHeader>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-gold">Gold Sponsor</SponsorLabel>
                {sponsorsGold.map((logo, i) => (
                    <SponsorCardTest2 color="bg-sponsor-gold" src={logo} alt={logo} width="250px" key={i} />
                ))}
            </div>
            <div className="flex items-center gap-8">
                <SponsorLabel className="bg-sponsor-tech">Tech Sponsor</SponsorLabel>
                {sponsorsTech.map((logo, i) => (
                    <SponsorCardTest2 color="bg-sponsor-tech" src={logo} alt={logo} width="150px" key={i} />
                ))}
            </div>
            <div className="flex w-min items-center gap-8">
                <SponsorLabel className="bg-sponsor-silver">Silver Sponsor</SponsorLabel>
                {sponsorsSilver.map((logo, i) => (
                    <SponsorCardTest2 color="bg-sponsor-silver" width="125px" src={logo} alt={logo} key={i} />
                ))}
            </div>
            <div className="flex w-min items-center gap-8">
                <SponsorLabel className="bg-sponsor-community">Community Sponsor</SponsorLabel>
                {sponsorsCommunity.map((logo, i) => (
                    <SponsorCardTest2 color="bg-sponsor-community" src={logo} alt={logo} key={i} />
                ))}
            </div>
        </div>
    );
};
export const SponsorSection6 = () => {
    return (
        <div className="mt-24 flex w-[clamp(300px,100%,800px)] flex-col items-center gap-4 px-4">
            <SectionHeader>WDCC Sponsors for 2025</SectionHeader>
            <div className="flex items-center gap-4">
                {sponsorsGold.map((logo, i) => (
                    <SponsorCardTest3 color="bg-sponsor-gold/40" src={logo} alt={logo} width="250px" key={i} />
                ))}
            </div>
            <div className="flex items-center gap-4">
                {sponsorsTech.map((logo, i) => (
                    <SponsorCardTest3 color="bg-sponsor-tech/40" src={logo} alt={logo} width="150px" key={i} />
                ))}
            </div>
            <div className="flex w-min items-center gap-4">
                {sponsorsSilver.map((logo, i) => (
                    <SponsorCardTest3 color="bg-sponsor-silver/40" width="125px" src={logo} alt={logo} key={i} />
                ))}
            </div>
            <div className="flex w-min items-center gap-4">
                {sponsorsCommunity.map((logo, i) => (
                    <SponsorCardTest3 color="bg-sponsor-community/40" src={logo} alt={logo} key={i} />
                ))}
            </div>
        </div>
    );
};

export const sponsorRegister = [
    SponsorSection,
    SponsorSection2,
    // SponsorSection3,
    SponsorSection4,
    // SponsorSection5,
    SponsorSection6,
];

const SponsorLabel = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            {...props}
            className={cn("size-min rounded-full p-4 px-8 font-semibold whitespace-nowrap", props.className)}
        >
            Gold Sponsor
        </div>
    );
};
