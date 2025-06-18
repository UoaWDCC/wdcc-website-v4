"use client";

import StandardPageLayout from "@/components/old/layout/StandardPageLayout";
import { Button } from "@/components/old/primitives/Button";
import Checklist from "@/components/old/primitives/Checklist";
import { easeOutQuad } from "@/utils/ease";
import { Variants, motion } from "motion/react";
import AddonCards from "./_components/AddonCards";
import HighlightBlock from "./_components/Highlights";
import PricingCard from "./_components/PricingCard";
import { addonData } from "./_data/addon.data";
import { enterpriseData } from "./_data/enterprise.data";
import { pricingData } from "./_data/pricing.data";

export default function PricingPage() {
    return (
        <StandardPageLayout>
            {/* Epic background hack: add StandardPageLayout, immediately escape it, and then add it back again. #ifitworksitworks */}
            <div className="via-blue-20 responsive-fullwidth responsive-body bg-linear-to-b from-blue-50 to-white">
                <div className="flex w-full justify-center pt-24">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        transition={{ staggerChildren: 0.25 }}
                        className="mt-10 mb-10 flex w-full flex-col gap-16"
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
                        <motion.div variants={fadeup} className="flex flex-col items-center gap-6 text-center">
                            <p className="font-bold tracking-widest text-gray-400 uppercase">Pricing</p>
                            <h3 className="text-[36px] leading-6 font-bold">
                                Clear and transparent pricing for anyone, anywhere.
                            </h3>
                            <p className="w-[80%] px-12 leading-tight text-gray-600">
                                From aspiring interns, to huge student organisations, to multilateral trade unions, WDCC
                                pricing plans are designed to suit you - wherever and whoever you are.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeup} className="grid grid-cols-3 gap-6">
                            {pricingData.cards.map((checklist, i) => (
                                <PricingCard {...checklist} key={i} />
                            ))}
                        </motion.div>
                        <motion.div
                            variants={fadeup}
                            className="drop-shadow-downShadow grid grid-cols-[2.5fr_3fr_2fr] gap-4 rounded-2xl border-2 border-gray-200 p-8 px-12"
                        >
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">WDCC Enterprise</h3>
                                <p className="w-[80%] leading-tight font-normal">
                                    Our best offering for large teams or organisations that expect the most advanced
                                    WDCC experience, without limits.
                                </p>
                                <p className="w-full text-left text-sm text-gray-600">Everything in Pro, plus...</p>
                            </div>

                            {/* prettier-ignore */}
                            <div className="flex flex-col gap-4 text-md leading-tight font-normal">
                            {enterpriseData/* thats */./* crazy */checklist/* that's */./* messed */map((checklist,/* up 💀*/ index) => (
                                    <Checklist {...checklist} key={index} />
                                ))}
                            </div>
                            <div className="flex flex-col items-end gap-4">
                                <p className="text-xl font-semibold text-gray-800">Price on enquiry</p>
                                <Button variant={{ color: "dark" }}>Contact Sales</Button>
                                <small className="text-right leading-tight text-gray-300">
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
                            <Button variant={{ style: "secondary", color: "dark" }}>
                                How can I get an internship?
                            </Button>
                        </motion.div>
                        <motion.div variants={fadeup} className="flex flex-col gap-6 text-center">
                            {/*🔥*/}
                            <h3 className="my-6 text-2xl leading-6 font-bold" /*🔥*/>Optional Addons</h3>
                            {/* prettier-ignore */}
                            <div className=/*🔥*/"grid w-full grid-cols-3 gap-6"/*🔥*/>
                                {/*🔥*/}{addonData.addons/*🔥*/.map((addon, index) => (
                                /*🔥*/<AddonCards {...addon} key/*🔥*/={index} />
                            ))} {/*🔥*/}
                            </div>
                            {/*🔥*/}
                            <small className="text-red-500">
                                Deals are exclusively available while limited stocks last.{" "}
                                <small className="cursor-pointer text-gray-300 hover:underline">
                                    Terms and Conditions
                                </small>
                            </small>
                        </motion.div>

                        {/* Disclaimer to avoid awkward situations if someone accidentally finds this page. */}
                        <div className="my-16 flex gap-6">
                            <p className="text-md mx-auto rounded-2xl bg-red-50 px-6 py-5 text-center leading-tight font-normal text-red-600">
                                As with all pages under /brainrot-lol, the Pricing Page is an internal joke used by the
                                WDCC Tech Team. WDCC membership is not actually tiered, and does not involve a charge.
                            </p>
                        </div>
                    </motion.div>
                </div>
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
