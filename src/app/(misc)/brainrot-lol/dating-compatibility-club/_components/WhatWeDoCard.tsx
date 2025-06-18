import { Button } from "@/components/primitives/Button";
import { VariantProps, tv } from "tailwind-variants";

// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!

const card = tv({
    base:
        "relative flex w-[330px] flex-col items-end gap-8 overflow-hidden rounded-2xl rounded-tl-[48px] rounded-br-[48px] p-8 " +
        "hover:drop-shadow-cardLift cursor-pointer transition duration-500 will-change-auto hover:-translate-x-1 hover:-translate-y-1 hover:duration-200",
    variants: {
        color: {
            // Yes these colors are wrong - I couldn't be bothered to change all the names for what is only a troll page lol.
            blue: "border-[3px] border-pink-700",
            green: "bg-pink-200",
            yellow: "border-[3px] border-pink-700",
        },
    },
});

export type WhatWeDoCardProps = {
    variant?: VariantProps<typeof card>;
    index: string;
    title: string;
    description: string;
    slug: string;
};

const InfoCard = ({ variant, index, title, description, slug }: WhatWeDoCardProps) => {
    return (
        <div className={card({ ...variant })}>
            <h2 className="absolute top-0 left-0 -translate-x-5 text-[80px] font-bold opacity-10">{index}</h2>
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <p className="leading-tight font-normal">{description}</p>
            <Button variant={{ style: "tertiary", color: "dark", width: "full" }}>Discover {slug} →</Button>
        </div>
    );
};

export default InfoCard;
