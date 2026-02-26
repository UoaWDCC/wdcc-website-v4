import { cn } from "@/utils/misc";

type ExecYearTagProps = {
    year: string;
    slug: string;
    onSelect: (slug: string) => () => void;
    isSelected: boolean;
};

export function ExecYearTag({ year, slug, onSelect, isSelected }: ExecYearTagProps) {
    return (
        <button
            className={cn(
                "cursor-pointer rounded-full border-2 bg-gray-50 px-5 py-2 leading-none font-semibold transition duration-500 will-change-auto hover:rotate-3 hover:bg-gray-100 hover:duration-200",
                isSelected ? "border-gray-500" : "border-gray-100"
            )}
            onClick={onSelect(slug)}
        >
            {year}
        </button>
    );
}
