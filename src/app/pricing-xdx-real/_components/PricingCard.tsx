import React from "react";

import { Button } from "@/components/primitives/Button";
import { cn } from "@/libs/utils";

import { pricingType } from "../_data/pricing.data";
import Checklist from "./Checklist";

const PricingCard = ({ ...data }: pricingType) => {
    return (
        <div className="text-center">
            <p className="text-lg font-bold uppercase text-gray-400">{data.header}</p>
            <div
                className={cn(
                    "mt-2 flex flex-col items-center gap-4 rounded-3xl border-2 border-gray-200 bg-white px-4 py-8 shadow-md",
                    data.mostPopular && "border-4 border-blue-400 bg-blue-20"
                )}
            >
                <h3 className="text-xl font-bold">{data.plan.title}</h3>
                {data.plan.description && (
                    <p className="w-full text-left text-sm text-gray-600">{data.plan.description}</p>
                )}
                <div className="flex flex-col gap-6 text-balance text-left">
                    {data.checklists.map((item, i) => (
                        <Checklist {...item} key={i} />
                    ))}
                </div>
                <h3 className="text-xl font-bold">{data.pricing ? `$${data.pricing}/mo` : "Free!"}</h3>
                <Button color="yellow">Choose this plan</Button>
                <small className="cursor-pointer text-gray-300 hover:underline">Terms and Conditions</small>
            </div>
        </div>
    );
};

export default PricingCard;
