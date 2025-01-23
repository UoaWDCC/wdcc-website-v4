"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Faq } from "@/types/models";

import { easeOutExpo } from "@/libs/ease";

import FaqButton from "./FaqButton";

interface FaqItemProps {
    faq: Faq;
    selected: boolean;
    handleClick: () => void;
}

export function FaqItem({ faq, selected, handleClick }: FaqItemProps) {
    useEffect(() => {}, [selected]);

    return (
        <div className="flex flex-col rounded-3xl border border-gray-150 bg-gray-20 p-2 pl-8">
            <button onClick={handleClick} className="group flex items-center justify-between">
                <p className="font-semibold group-hover:underline">{faq.question}</p>
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
