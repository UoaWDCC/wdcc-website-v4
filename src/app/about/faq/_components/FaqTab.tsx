import { cn } from "@/libs/utils";

import { faqColors } from "../_data/faq.data";

interface FaqTabProps {
    colors: faqColors;
    text: string;
    selected?: boolean;
    handleClick?: () => void;
}

export function FaqTab({ colors, text, selected, handleClick }: FaqTabProps) {
    return (
        <button
            onClick={handleClick}
            className={cn("flex min-w-[258px] items-center gap-4 rounded-full px-6 py-1", colors.tabBg)}
        >
            {selected && <div className={cn("h-2 w-2 rounded-full bg-blue-500", colors.tabCircle)} />}
            <p className="text-left text-xl font-semibold text-gray-800">{text}</p>
        </button>
    );
}
