import { Faq } from "@/types/models";

import FaqButton from "@/assets/svg/FaqButton";

interface FaqItemProps {
    faq: Faq;
    selected: boolean;
    handleClick: () => void;
}

export function FaqItem({ faq, selected, handleClick }: FaqItemProps) {
    return (
        <button onClick={handleClick} className="flex flex-col rounded-3xl border border-gray-150 bg-gray-20 p-2 pl-8">
            <div className="flex items-center justify-between">
                <p className="font-semibold">{faq.question}</p>
                <FaqButton rotate={selected} className="h-6 w-6" />
            </div>
            {selected && <p className="mr-6 mt-2 text-left">{faq.answer}</p>}
        </button>
    );
}
