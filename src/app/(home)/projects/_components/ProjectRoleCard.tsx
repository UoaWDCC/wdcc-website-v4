import React from "react";
import { tv, VariantProps } from "tailwind-variants";

import { Button } from "@/components/primitives/Button";
import Link from "next/link";
import Arrow from "@/assets/svg/Arrow";

// Yes, I know it says "yellow" and the color is bg-orange (not bg-yellow). The yellow is just a bit too bright for this page lol.

const card = tv({
    base: "relative w-full flex flex-col gap-6 overflow-hidden rounded-2xl sm:py-12 sm:px-11 py-9 px-9 " +
        "transition will-change-auto duration-500 hover:duration-200 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer hover:drop-shadow-cardLift",
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
    slug: string;
    graphic?: React.ReactNode; // TODO this is TBA
}


const ProjectRoleCard = ({ variant, title, description, slug, graphic }: ProjectRoleCardProps) => {
    return (
        <Link className={card({ ...variant })} href={"/projects/roles/" + slug}>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-800 leading-none">{title}</h3>
                <Button variant={{ style: "tertiary", color: "dark"}} className="min-h-[39px]">
                    <span className="hidden sm:inline"> Learn </span>
                    <Arrow></Arrow>
                </Button>
            </div>
            <p className="leading-tight text-md font-normal">{description}</p>

            {/*TODO graphic here*/}
            <div className="h-[180px] w-full rounded-xl bg-linear-to-r from-[#C9A9FF] to-[#FFA4A5] flex items-center justify-center">
                <p className="text-white">Image or relevant graphic here</p>
                {graphic}
            </div>
        </Link>
    );
};

export default ProjectRoleCard;
