import React from "react";

import { Button } from "@/components/primitives/Button";
import { cn } from "@/libs/utils";

import { pricingType } from "../_data/pricing.data";

const PricingCard = ({ ...data }: pricingType) => {
    return (
        <div className="text-center">
            <p>{data.header}</p>
            <div
                className={cn(
                    "flex flex-col items-center gap-4 rounded-3xl border-2 border-gray-200 bg-white px-4 py-8 shadow-md",
                    data.mostPopular && "border-4 border-blue-400"
                )}
            >
                <h3 className="text-xl font-bold">{data.plan.title}</h3>
                {data.plan.description && (
                    <p className="w-full text-left text-sm text-gray-600">{data.plan.description}</p>
                )}
                <div className="flex flex-col gap-6 text-balance text-left">
                    {data.values.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div
                                className={cn(
                                    "h-6 min-w-6 rounded-full bg-green-400 p-1",
                                    item.notIncluded && "bg-red-400"
                                )}
                            ></div>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
                <h3 className="text-xl font-bold">{data.pricing ? `$${data.pricing}/mo` : "Free!"}</h3>
                <Button color="yellow">Choose this plan</Button>
                <small className="text-gray-300">Terms and Conditions</small>
            </div>
        </div>
    );
};

export default PricingCard;
