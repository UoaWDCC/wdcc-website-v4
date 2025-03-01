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
    const [selectedTab, setSelectedTab] = useState(sections[0]);
    const [selectedFaq, setSelectedFaq] = useState<Faq | null>(null);

    const handleTabSelect = (tabName: string) => {
        const foundSection = sections.find((section) => section.name === tabName);
        if (foundSection) {
            setSelectedTab(foundSection);
            setSelectedFaq(null); // Reset selected FAQ when changing tabs
        }
    };

    const handleItemSelect = (faq: Faq) => {
        setSelectedFaq(selectedFaq?.question === faq.question ? null : faq);
    };

    return (
        <div className="flex w-full flex-col items-start justify-between gap-4 self-stretch md:flex-row">
            <FaqCategorySelect sections={sections} selectedTab={selectedTab} handleTabSelect={handleTabSelect} />
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
                        selected={selectedFaq?.question === faq.question}
                        handleClick={() => handleItemSelect(faq)}
                    />
                ))}
            </motion.div>
        </div>
    );
}

interface FaqCategorySelectorProps {
    sections: FaqSection[];
    selectedTab: FaqSection;
    handleTabSelect: (tabName: string) => void;
}

const FaqCategorySelect = ({ sections, handleTabSelect, selectedTab }: FaqCategorySelectorProps) => {
    return (
        <>
            <div className="flex w-full justify-end md:hidden">
                <FaqSelect sections={sections} handleTabSelect={handleTabSelect} />
            </div>
            <div className="hidden w-[400px] flex-col items-start justify-center gap-2 md:flex">
                {sections.map((section) => (
                    <FaqTab
                        key={section.name}
                        colors={section.colors}
                        text={section.name}
                        selected={selectedTab.name === section.name}
                        handleClick={() => handleTabSelect(section.name)}
                    />
                ))}
            </div>
        </>
    );
};

interface FaqSelectProps {
    sections: FaqSection[];
    handleTabSelect: (section: string) => void;
}

const FaqSelect = ({ sections, handleTabSelect }: FaqSelectProps) => {
    const [selected, setSelected] = useState(sections[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (section: FaqSection) => {
        setSelected(section);
        handleTabSelect(section.name);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="rounded-full bg-gray-200 p-0.5 px-4 font-semibold">
                {selected.name}
            </button>
            {isOpen && (
                <div className="absolute right-0 top-full translate-y-1 flex-col gap-1 rounded-xl bg-gray-200 p-1">
                    {sections.map((section) => (
                        <button
                            key={section.name}
                            onClick={() => handleSelect(section)}
                            className="w-full cursor-pointer rounded-lg px-4 text-right hover:bg-black"
                        >
                            {section.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

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
