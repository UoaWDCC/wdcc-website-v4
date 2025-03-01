import React from "react";
import { tv, VariantProps } from "tailwind-variants";

import { Button } from "@/components/primitives/Button";

// Yes, I know it says "yellow" and the color is bg-orange (not bg-yellow). The yellow is just a bit too bright for this page lol.

export const card = tv({
    base:
        "relative flex w-[330px] flex-col items-end gap-8 overflow-hidden rounded-2xl rounded-tl-[48px] p-8 " +
        "cursor-pointer transition duration-500 will-change-auto hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-cardLift hover:duration-200",
    variants: {
        color: {
            blue: "bg-blue-100",
            green: "bg-green-100",
            yellow: "bg-orange-100",
        },
    },
});

export interface WhatWeDoCardProps {
    variant?: VariantProps<typeof card>;
    index: string;
    title: string;
    description: string;
    slug: string;
}

const InfoCard = ({ variant, index, title, description, slug }: WhatWeDoCardProps) => {
    return (
        <div className={card({ ...variant })}>
            <h2 className="absolute left-0 top-0 -translate-x-5 text-[80px] font-bold opacity-10">{index}</h2>
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <p className="font-normal leading-tight">{description}</p>
            <Button variant={{ style: "tertiary", color: "dark", width: "full" }}>Discover {slug} →</Button>
        </div>
    );
};

export default InfoCard;
