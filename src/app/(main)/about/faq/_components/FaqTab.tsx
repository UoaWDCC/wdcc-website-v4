import { FaqColors } from "@/types/pages/FaqPage";
import { cn } from "@/utils/misc";

type FaqTabProps = {
    colors: FaqColors;
    text: string;
    selected?: boolean;
    handleClick?: () => void;
};

export function FaqTab({ colors, text, selected, handleClick }: FaqTabProps) {
    return (
        <button
            onClick={handleClick}
            className={cn(
                "group flex w-4/5 items-center gap-4 rounded-full px-6 py-1 transition-[width]",
                colors.tabBg,
                selected && "w-full"
            )}
            data-selected={selected}
        >
            <div
                className={cn(
                    "size-0 rounded-full bg-blue-500 transition-[width,height] group-data-[selected=true]:size-2",
                    colors.tabCircle
                )}
            />
            <p className="text-left text-xl font-semibold text-gray-800">{text}</p>
        </button>
    );
}
