import { SponsorTierKeys } from "@/assets/image/sponsors";
import ImageFit, { ImageFitProps } from "@/components/primitives/ImageFit";

const tierWidth: Record<SponsorTierKeys, number> = {
    gold: 250,
    tech: 250,
    silver: 150,
    community: 150,
};

type SponsorCardProps = {
    tier: SponsorTierKeys;
} & ImageFitProps;
const SponsorCard = ({ tier, ...image }: SponsorCardProps) => {
    return (
        <ImageFit
            {...image}
            width={`${tierWidth[tier ?? "gold"]}px`}
            className="drop-shadow-[0px_0px_8px_var(--background)]"
        />
    );
};

export default SponsorCard;
