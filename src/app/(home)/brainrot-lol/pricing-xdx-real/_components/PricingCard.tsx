import React from "react";

import { Button } from "@/components/primitives/Button";

import Checklist, { ChecklistType } from "@/components/primitives/Checklist";
import { tv, VariantProps } from "tailwind-variants";

const pricingcard = tv({
    base: "mt-2 flex flex-col items-center gap-6 rounded-[32px]  px-8 py-10 drop-shadow-downShadow",
    variants: {
        style: {
            free: "bg-white",
            standard: "bg-white border-2",
            pro: "border-[3px] border-blue-400",
        },
    },
});

const titletext = tv({
    base: "font-bold text-xl leading-none",
    variants: {
        style: {
            free: "text-gray-600",
            standard: "text-foreground",
            pro: "text-transparent bg-clip-text bg-gradient-to-r from-[#1B02F6] to-[#00009B]",
        }
    }
})

const headertext = tv({
    base: "text-md font-bold uppercase",
    variants: {
        style: {
            free: "text-gray-400",
            standard: "text-gray-400",
            pro: "text-blue-400",
        }
    }
})

const button = tv({
    base: "py-3 leading-none",
    variants: {
        style: {
            free: "bg-yellow-100 text-yellow-750 hover:bg-yellow-150 border-none",
            standard: "bg-yellow-100 text-yellow-750 hover:bg-yellow-150 border-none",
            pro: "border-yellow-400 bg-yellow-brand text-gray-800 hover:bg-yellow-200",
        }
    }
})

 type pricingType = {
    header: string;
    plan: {
        title: string;
        desc?: string;
        note?: string;
    };
    checklists: ChecklistType[];
    pricing: number;
    variant: VariantProps<typeof pricingcard>
};

const PricingCard = ({ header, plan, checklists, pricing, variant }: pricingType) => {
    return (
        <div className="text-center">
            <p className={headertext({...variant})}>{header}</p>
            <div
                className={pricingcard({...variant})}
            >
                <h3 className={titletext({...variant})}>{plan.title}</h3>

                {plan.desc && (
                    <p className="w-[80%] leading-tight font-normal">{plan.desc}</p>
                )}

                <div className="flex flex-col gap-4 text-balance text-left text-md leading-tight font-normal">
                    {plan.note && (
                        <p className="w-full text-left text-sm text-gray-600">{plan.note}</p>
                    )}
                    {checklists.map((item, i) => (
                        <Checklist {...item} key={i} />
                    ))}
                </div>
                <h3 className={titletext({ ...variant })}>{pricing ? `$${pricing}/mo` : "Free!"}</h3>

                {/* can't be bothered figuring out how to pass tailwind variant into button variant, so style is hardcoded lol*/}
                <Button className={button({...variant})}>Choose this plan</Button>

                <small className="cursor-pointer text-gray-300 hover:underline">Terms and Conditions</small>
            </div>
        </div>
    );
};

export default PricingCard;
