import { VariantProps, tv } from "tailwind-variants";
import { ImageType } from "@/types/misc/Image";
import ImageCover from "@/components/ImageCover";
import placeholder from "../_assets/placeholder.png";

const card = tv({
    base: "flex w-min flex-col gap-4 rounded-lg p-4",
    variants: {
        role: {
            developer: "bg-blue-200",
            techlead: "bg-green-200",
            designer: "bg-purple-200",
            manager: "bg-yellow-200",
            tutor: "bg-red-200",
        },
    },
    defaultVariants: {
        role: "developer",
    },
});

type Variant = { variant?: VariantProps<typeof card> };

type TeamCardProps = {
    name: string;
    role: string;
    image?: ImageType;
} & Variant;

const TeamMemberCard = ({ name, role, image, variant }: TeamCardProps) => {
    return (
        <div className={card(variant)}>
            <div className="h-[150px] w-[200px] rounded-md bg-gray-50">
                <ImageCover src={image?.src ?? placeholder} alt={image?.alt ?? name} height={"150px"} width="200px" />
            </div>
            <div className="space-2">
                <p className="font-semibold">{name}</p>
                <p>{role}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;
