import React from "react";
import { tv, VariantProps } from "tailwind-variants";

import { Button } from "@/components/primitives/Button";

const card = tv({
    base: "relative flex w-[330px] flex-col items-end gap-8 overflow-hidden rounded-2xl rounded-tl-[48px] p-8 shadow-lg",
    variants: {
        color: {
            blue: "bg-green-100",
            green: "bg-blue-100",
            yellow: "bg-yellow-100",
        },
    },
});

export interface CardProps {
    set?: VariantProps<typeof card>;
    index: string;
    title: string;
    description: string;
    slug: string;
}

const Card = ({ set, index, title, description, slug }: CardProps) => {
    return (
        <div className={card({ ...set })}>
            <h2 className="absolute left-0 top-0 -translate-x-4 text-[80px] font-bold opacity-10">{index}</h2>
            <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
            <p className="text-sm font-normal text-foreground">{description}</p>
            <Button set={{ type: "ghost", color: "gray" }}>Discover {slug} →</Button>
        </div>
    );
};

export default Card;
