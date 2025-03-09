"use client";

import { AnimatePresence, motion } from "motion/react";

import { Faq } from "@/types/models";

import { easeOutExpo } from "@/libs/ease";

import FaqButton from "./FaqButton";

interface FaqItemProps {
    faq: Faq;
    selected: boolean;
    handleClick: () => void;
}

export function FaqItem({ faq, selected, handleClick }: FaqItemProps) {
    return (
        <div className="flex flex-col rounded-3xl border border-gray-150 gap-2 bg-gray-20 p-2 pl-8">
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
                        className="mr-6 mt-auto overflow-hidden text-left"
                    >
                        {faq.answer}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
