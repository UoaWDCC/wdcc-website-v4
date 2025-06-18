import { Button } from "@/components/old/primitives/Button";
import Checklist, { ChecklistType } from "@/components/old/primitives/Checklist";
import { VariantProps, tv } from "tailwind-variants";

const pricingcard = tv({
    base: "drop-shadow-downShadow mt-2 flex flex-col items-center gap-6 rounded-[32px] px-8 py-10",
    variants: {
        style: {
            free: "bg-white",
            standard: "border-2 bg-white",
            pro: "border-[3px] border-blue-400",
        },
    },
});

const titletext = tv({
    base: "text-xl leading-none font-bold",
    variants: {
        style: {
            free: "text-gray-600",
            standard: "text-foreground",
            pro: "bg-linear-to-r from-[#1B02F6] to-[#00009B] bg-clip-text text-transparent",
        },
    },
});

const headertext = tv({
    base: "text-md font-bold uppercase",
    variants: {
        style: {
            free: "text-gray-400",
            standard: "text-gray-400",
            pro: "text-blue-400",
        },
    },
});

const button = tv({
    base: "py-3 leading-none",
    variants: {
        style: {
            free: "text-yellow-750 hover:bg-yellow-150 border-none bg-yellow-100",
            standard: "text-yellow-750 hover:bg-yellow-150 border-none bg-yellow-100",
            pro: "bg-yellow-brand border-yellow-400 text-gray-800 hover:bg-yellow-200",
        },
    },
});

type pricingType = {
    header: string;
    plan: {
        title: string;
        desc?: string;
        note?: string;
    };
    checklists: ChecklistType[];
    pricing: number;
    variant: VariantProps<typeof pricingcard>;
};

const PricingCard = ({ header, plan, checklists, pricing, variant }: pricingType) => {
    return (
        <div className="text-center">
            <p className={headertext({ ...variant })}>{header}</p>
            <div className={pricingcard({ ...variant })}>
                <h3 className={titletext({ ...variant })}>{plan.title}</h3>

                {plan.desc && <p className="w-[80%] leading-tight font-normal">{plan.desc}</p>}

                <div className="text-md flex flex-col gap-4 text-left leading-tight font-normal text-balance">
                    {plan.note && <p className="w-full text-left text-sm text-gray-600">{plan.note}</p>}
                    {checklists.map((item, i) => (
                        <Checklist {...item} key={i} />
                    ))}
                </div>
                <h3 className={titletext({ ...variant })}>{pricing ? `$${pricing}/mo` : "Free!"}</h3>

                {/* can't be bothered figuring out how to pass tailwind variant into button variant, so style is hardcoded lol*/}
                <Button className={button({ ...variant })}>Choose this plan</Button>

                <small className="cursor-pointer text-gray-300 hover:underline">Terms and Conditions</small>
            </div>
        </div>
    );
};

export default PricingCard;
