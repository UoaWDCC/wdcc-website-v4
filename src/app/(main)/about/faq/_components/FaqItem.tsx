"use client";

import { AnimatePresence, motion } from "motion/react";
import { Faq } from "@/types/models/Faq";
import { easeOutExpo } from "@/utils/ease";
import FaqButton from "./FaqButton";

type FaqItemProps = {
    faq: Faq;
    selected: boolean;
    handleClick: () => void;
};

export function FaqItem({ faq, selected, handleClick }: FaqItemProps) {
    return (
        <div className="border-gray-150 bg-gray-20 flex flex-col gap-2 rounded-3xl border p-2 pl-8">
            <button onClick={handleClick} className="group flex items-start justify-between">
                <p className="text-left font-semibold group-hover:underline">{faq.question}</p>
                <FaqButton rotate={selected} className="size-6" />
            </button>
            <AnimatePresence mode="wait">
                {selected && (
                    <motion.p
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        key="faq-content"
                        transition={{ duration: 0.5, ease: easeOutExpo }}
                        className="mt-auto mr-6 overflow-hidden text-left"
                    >
                        {faq.answer}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
