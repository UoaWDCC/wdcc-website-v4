"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { Faq } from "@/types/models";

import { FaqSection } from "../_data/faq.data";
import { FaqItem } from "./FaqItem";
import { FaqTab } from "./FaqTab";

interface FaqSelectorProps {
    sections: FaqSection[];
}

export function FaqSelector({ sections }: FaqSelectorProps) {
    const [selectedTab, setSelectedTab] = useState({ name: sections[0].name, faqs: sections[0].faqs });
    const [selectedFaq, setSelectedFaq] = useState({});

    const handleTabSelect = (tab: string) => () => {
        setSelectedTab({ name: tab, faqs: sections.find((section) => section.name === tab)?.faqs || [] });
    };

    const handleItemSelect = (faq: Faq) => () => {
        setSelectedFaq(faq === selectedFaq ? {} : faq);
    };

    return (
        <div className="flex w-full flex-col items-start justify-between gap-4 self-stretch md:flex-row">
            <div className="flex w-[400px] flex-col items-start justify-center gap-2">
                {sections.map((section) => (
                    <FaqTab
                        key={section.name}
                        colors={section.colors}
                        text={section.name}
                        selected={selectedTab.name === section.name}
                        handleClick={handleTabSelect(section.name)}
                    />
                ))}
            </div>

            <motion.div
                key={selectedTab.name}
                variants={itemContainerVariants}
                initial="closed"
                animate="open"
                exit="exit"
                className="flex w-full flex-col gap-2"
            >
                {selectedTab.faqs.map((faq) => (
                    <FaqItem
                        key={faq.question}
                        faq={faq}
                        selected={selectedFaq === faq}
                        handleClick={handleItemSelect(faq)}
                    />
                ))}
            </motion.div>
        </div>
    );
}

const itemContainerVariants = {
    open: {
        opacity: 1,
    },
    closed: {
        opacity: 0,
    },
    exit: {
        opacity: 0,
    },
};
