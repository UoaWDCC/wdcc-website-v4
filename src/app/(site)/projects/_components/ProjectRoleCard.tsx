import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { tv, VariantProps } from "tailwind-variants";

import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";

// Yes, I know it says "yellow" and the color is bg-orange (not bg-yellow). The yellow is just a bit too bright for this page lol.

const card = tv({
    base:
        "relative flex w-full flex-col gap-6 overflow-hidden rounded-2xl px-9 py-9 sm:px-11 sm:py-12 " +
        "hover:drop-shadow-cardLift transition duration-500 will-change-auto hover:-translate-x-1 hover:-translate-y-1 hover:duration-200",
    variants: {
        color: {
            blue: "bg-blue-100",
            green: "bg-green-100",
            yellow: "bg-orange-100",
            purple: "bg-purple-100",
        },
    },
});

export interface ProjectRoleCardProps {
    variant?: VariantProps<typeof card>;
    title: string;
    description: string;
    slug?: string;
    graphic?: StaticImageData;
}

const ProjectRoleCard = ({ variant, title, description, slug, graphic }: ProjectRoleCardProps) => {
    return slug ? (
        // Render typical card if there is a slug (i.e. the card links somewhere)
        <Link className={card({ ...variant })} href={"/projects/roles/" + slug}>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl leading-none font-bold text-gray-800">{title}</h3>
                <Button variant={{ style: "tertiary", color: "dark" }} className="min-h-[39px]">
                    <span className="hidden sm:inline"> Learn </span>
                    <Arrow></Arrow>
                </Button>
            </div>

            <p className="text-md leading-tight font-normal">{description}</p>

            {graphic ? (
                <div className="relative w-full overflow-hidden rounded-xl">
                    <Image src={graphic} alt="" height={1000} />
                </div>
            ) : (
                <div className="flex h-[60px] w-full items-center justify-center rounded-xl bg-linear-to-r from-[#C9A9FF] to-[#FFA4A5]">
                    <p className="text-white">Coming soon!</p>
                </div>
            )}
        </Link>
    ) : (
        // Render non-clickable placeholder otherwise.
        <div className={card({ ...variant })}>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl leading-none font-bold text-gray-800">{title}</h3>
            </div>

            <p className="text-md leading-tight font-normal">{description}</p>

            {graphic ? (
                <div className="relative w-full overflow-hidden rounded-xl">
                    <Image src={graphic} alt="" height={1000} />
                </div>
            ) : (
                <div className="flex h-[60px] w-full items-center justify-center rounded-xl bg-linear-to-r from-[#C9A9FF] to-[#FFA4A5]">
                    <p className="text-white">Coming soon!</p>
                </div>
            )}
        </div>
    );
};

export default ProjectRoleCard;
