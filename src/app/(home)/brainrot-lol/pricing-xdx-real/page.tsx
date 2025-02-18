"use client";

import { motion, Variants } from "motion/react";

import StandardPageLayout from "@/components/layout/StandardPageLayout";
import { Button } from "@/components/primitives/Button";
import { easeOutQuad } from "@/libs/ease";

import AddonCards from "./_components/AddonCards";
import Checklist from "./_components/Checklist";
import HighlightBlock from "./_components/Highlights";
import PricingCard from "./_components/PricingCard";
import { addonData } from "./_data/addon.data";
import { enterpriseData } from "./_data/enterprise.data";
import { pricingData } from "./_data/pricing.data";

export default function PricingPage() {
    return (
        <StandardPageLayout>
            <div className="flex w-full justify-center">
                <motion.div
                    initial="initial"
                    animate="animate"
                    transition={{ staggerChildren: 0.25 }}
                    className="mb-10 mt-10 flex w-[1100px] flex-col gap-16"
                >
                    <motion.div variants={fadeup} className="space-y-3">
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
                    </motion.div>
                    <motion.div variants={fadeup} className="flex flex-col items-center text-center">
                        <p className="font-bold uppercase tracking-widest text-gray-400">Pricing</p>
                        <h3 className="my-6 text-2xl font-bold leading-6">
                            Clear and transparent pricing for anyone, anywhere.
                        </h3>
                        <p className="px-12 text-lg">
                            From aspiring interns, to huge student organisations, to multilateral trade unions, WDCC
                            pricing plans are designed to suit you - wherever and whoever you are.
                        </p>
                    </motion.div>
                    <motion.div variants={fadeup} className="grid grid-cols-3 gap-6">
                        {pricingData.cards.map((checklist, i) => (
                            <PricingCard {...checklist} key={i} />
                        ))}
                    </motion.div>
                    <motion.div variants={fadeup} className="flex gap-6 rounded-2xl border-2 border-gray-200 p-8 px-12">
                        <div className="flex w-min grow flex-col gap-4">
                            <h3 className="text-xl font-bold">WDCC Enterprise</h3>
                        </div>
                        {/* prettier-ignore */}
                        <div className="flex w-[360px] flex-col gap-4">
                            {enterpriseData/* thats */./* crazy */checklist/* that's */./* messed */map((checklist,/* up 💀*/ index) => (
                                    <Checklist {...checklist} key={index} />
                                ))}
                        </div>
                        <div className="flex w-min grow flex-col items-end gap-4">
                            <p className="text-xl font-semibold text-gray-800">Price on enquiry</p>
                            <Button color="dark">Contact Sales</Button>
                            <small className="text-right text-gray-300">
                                Terms and Conditions will vary by agreed conditions, depending on the nature of your
                                organisation.
                            </small>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeup} className="flex w-full gap-6 whitespace-nowrap">
                        <Button variant={{ style: "tertiary", color: "blue" }}>Frequently Asked Questions</Button>
                        <Button variant={{ style: "secondary", color: "dark" }}>Why can’t I cancel?</Button>
                        <Button variant={{ style: "secondary", color: "dark" }}>
                            Why can’t I date Chris and Kimberley?
                        </Button>
                        <Button variant={{ style: "secondary", color: "dark" }}>How can I get an internship?</Button>
                    </motion.div>
                    <motion.div variants={fadeup} className="flex flex-col gap-6 text-center">
                        {/*🔥*/}
                        <h3 className="my-6 text-2xl font-bold leading-6" /*🔥*/>Optional Addons</h3>
                        {/* prettier-ignore */}
                        <div className=/*🔥*/"grid w-full grid-cols-3 gap-6"/*🔥*/>
                            {/*🔥*/}{addonData.addons/*🔥*/.map((addon, index) => (
                                /*🔥*/<AddonCards {...addon} key/*🔥*/={index} />
                            ))}                 {/*🔥*/}
                        </div>
                        {/*🔥*/}
                        <small className="text-red-500">
                            Deals are exclusively available while limited stocks last.{" "}
                            <small className="cursor-pointer text-gray-300 hover:underline">Terms and Conditions</small>
                        </small>
                    </motion.div>
                </motion.div>
            </div>
        </StandardPageLayout>
    );
}

const fadeup: Variants = {
    initial: { y: 32, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: { ease: easeOutQuad, duration: 1 },
    },
};
