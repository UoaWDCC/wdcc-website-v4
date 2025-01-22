import { Faq } from "@/types/models";

interface FaqItemProps {
    faq: Faq;
    selected: boolean;
    handleClick: () => void;
}

export function FaqItem({ faq, selected, handleClick }: FaqItemProps) {
    return (
        <button
            onClick={handleClick}
            className="flex items-start justify-between rounded-3xl border border-gray-150 bg-gray-20 p-2 pl-8"
        >
            {faq.question} {selected && "✔️"}
        </button>
    );
}
