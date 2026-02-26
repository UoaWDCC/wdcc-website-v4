import Link from "next/link";
import { cn } from "@/utils/misc";

type ExecYearTagProps = {
    year: string;
    isSelected: boolean;
};

export function ExecYearTag({ year, isSelected }: ExecYearTagProps) {
    return (
        <Link
            href={`/about/team/${year}`}
            scroll={false}
            className={cn(
                "cursor-pointer rounded-full border-2 bg-gray-50 px-5 py-2 leading-none font-semibold transition duration-500 will-change-auto hover:rotate-3 hover:bg-gray-100 hover:duration-200",
                isSelected ? "border-gray-500" : "border-gray-100"
            )}
        >
            {year}
        </Link>
    );
}
