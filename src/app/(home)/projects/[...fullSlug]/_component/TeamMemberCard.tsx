import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const card = tv({
    base: "flex w-min flex-col gap-4 rounded-lg p-4",
    variants: {
        role: {
            engineer: "bg-blue-200",
            techlead: "bg-yellow-200",
            designer: "bg-purple-200",
            manager: "bg-green-200",
        },
    },
    defaultVariants: {
        role: "engineer",
    },
});

type Variant = { variant?: VariantProps<typeof card> };

interface teamCardProps extends Variant {
    name: string;
    role: string;
}

const TeamMemberCard = ({ name, role, variant }: teamCardProps) => {
    return (
        <div className={card(variant)}>
            <div className="h-[150px] w-[200px] rounded bg-gray-50"></div>
            <div className="space-2">
                <p className="font-semibold">{name}</p>
                <p>{role}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;
