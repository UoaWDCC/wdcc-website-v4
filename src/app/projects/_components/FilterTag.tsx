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
                "rounded-full border-2 bg-gray-100 px-6 py-2",
                isSelected ? "border-gray-500" : "border-gray-100"
            )}
            onClick={setSelectedYear(year)}
        >
            {year}
        </button>
    );
}
