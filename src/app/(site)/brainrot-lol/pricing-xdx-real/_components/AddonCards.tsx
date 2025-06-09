import { Button } from "@/components/primitives/Button";
import Checklist, { ChecklistType } from "@/components/primitives/Checklist";
import { cn } from "@/utils/misc";

export type AddonCardType = {
    title: string;
    checklist: ChecklistType;
    price: number;
    urgent?: boolean;
};

const AddonCards = ({ ...data }: AddonCardType) => {
    return (
        <div className="flex grow flex-col items-center gap-4 rounded-2xl bg-white px-8 py-8 shadow-lg">
            <h3 className="text-xl font-bold">{data.title}</h3>
            <div className="text-md leading-tight font-normal">
                <Checklist {...data.checklist} />
            </div>
            <h3 className={cn("mt-auto text-xl font-bold", data.urgent && "text-orange-500")}>
                {data.urgent && <span className="text-md font-semibold">NOW</span>} ${data.price}
                {data.urgent && <span>!</span>}
            </h3>
            <Button variant={{ style: "secondary", color: "yellow" }}>Add this</Button>
        </div>
    );
};

export default AddonCards;
