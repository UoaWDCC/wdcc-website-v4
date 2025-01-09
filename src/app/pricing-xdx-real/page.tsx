import StandardPageLayout from "@/components/StandardPageLayout";

import HighlightBlock from "./_components/Highlights";
import PricingCard from "./_components/PricingCard";
import { pricingData } from "./_data/pricing.data";

export default function PricingPage() {
    return (
        <StandardPageLayout>
            <div className="flex w-full justify-center">
                <div className="mb-10 mt-10 flex w-[1100px] flex-col">
                    <div className="space-y-3">
                        <HighlightBlock>
                            <p>
                                Due to new WDCC policies, existing members of alternative tech societies (see
                                Alternative Societies List) may be subject to a compulsory 15% additional services
                                charge. <strong>Learn more.</strong>
                            </p>
                        </HighlightBlock>
                        <HighlightBlock variant={{ color: "red" }}>
                            <p>
                                Due to service limitations, we are currently unable to accept new subscribers from
                                UOACS. <strong>Learn more.</strong>
                            </p>
                        </HighlightBlock>
                    </div>
                    <div className="my-16 flex flex-col items-center text-center">
                        <p className="uppercase tracking-widest">Pricing</p>
                        <h3 className="my-6 text-2xl font-bold leading-6">
                            Clear and transparent pricing for anyone, anywhere.
                        </h3>
                        <p className="px-12 text-lg">
                            From aspiring interns, to huge student organisations, to multilateral trade unions, WDCC
                            pricing plans are designed to suit you - wherever and whoever you are.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {pricingData.map((pricing, i) => (
                            <PricingCard key={i} {...pricing} />
                        ))}
                    </div>
                </div>
            </div>
        </StandardPageLayout>
    );
}
