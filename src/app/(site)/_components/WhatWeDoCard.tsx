import React from "react";
import Link from "next/link";
import { tv, VariantProps } from "tailwind-variants";

import { Button } from "@/components/primitives/Button";

// Yes, I know it says "yellow" and the color is bg-orange (not bg-yellow). The yellow is just a bit too bright for this page lol.

export const card = tv({
    base:
        "relative flex w-[330px] flex-col items-end gap-8 overflow-hidden rounded-2xl rounded-tl-[48px] p-8 " +
        "hover:drop-shadow-cardLift cursor-pointer transition duration-500 will-change-auto hover:-translate-x-1 hover:-translate-y-1 hover:duration-200",
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
        <Link href={slug} className={card({ ...variant })}>
            <h2 className="absolute top-0 left-0 -translate-x-5 text-[80px] font-bold opacity-10">{index}</h2>
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <p className="leading-tight font-normal">{description}</p>
            <Button variant={{ style: "tertiary", color: "dark", width: "full" }}>Discover {slug} →</Button>
        </Link>
    );
};

export default InfoCard;
