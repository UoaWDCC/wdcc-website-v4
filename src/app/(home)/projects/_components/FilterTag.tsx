import React from "react";

import { cn } from "@/libs/utils";

interface FilterTagProps {
    year: string;
    setSelectedYear: (year: string) => () => void;
    isSelected: boolean;
}

export function FilterTag({ setSelectedYear, year, isSelected }: FilterTagProps) {
    return (
        <button
            className={cn(
                "px-5 py-2 rounded-full border-2 bg-gray-50 leading-none font-semibold transition will-change-auto duration-500 hover:duration-200 hover:bg-gray-100 hover:rotate-3 cursor-pointer",
                isSelected ? "border-gray-500" : "border-gray-100"
            )}
            onClick={setSelectedYear(year)}
        >
            {year}
        </button>
    );
}
