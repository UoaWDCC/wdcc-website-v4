import React from "react";

import { Button } from "@/components/primitives/Button";
import { cn } from "@/libs/utils";

import Checklist, { ChecklistType } from "./Checklist";

export type AddonCardType = {
    title: string;
    checklist: ChecklistType;
    price: number;
    urgent?: boolean;
};

const AddonCards = ({ ...data }: AddonCardType) => {
    return (
        <div className="flex grow flex-col items-center gap-4 rounded-2xl bg-white px-4 py-8 shadow-lg">
            <h3 className="text-xl font-semibold">{data.title}</h3>
            <Checklist {...data.checklist} />
            <h3 className={cn("mt-auto text-xl font-semibold", data.urgent && "text-orange-500")}>
                {data.urgent && <span className="text-lg">NOW</span>} ${data.price}
            </h3>
            <Button variant="secondary" color="yellow">
                Add this
            </Button>
        </div>
    );
};

export default AddonCards;
