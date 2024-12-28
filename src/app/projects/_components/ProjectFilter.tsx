import React from "react";

import { Project } from "@/types/models";

import { FilterTag } from "./FilterTag";

interface ProjectFilterProps {
    projects: Project[];
    setSelectedYear: (year: string) => () => void;
    selectedYear: string; // Add this prop
}

export function ProjectFilter({ projects, setSelectedYear, selectedYear }: ProjectFilterProps) {
    const availableYears = Array.from(new Set(projects.map((project) => project.year)));
    return (
        <div className="mb-9 flex items-center gap-[18px]">
            <p className="text-[16px] font-semibold">Filter By year</p>
            <div className="flex gap-4">
                {availableYears.map((year, index) => (
                    <FilterTag
                        year={year}
                        setSelectedYear={setSelectedYear}
                        isSelected={selectedYear === year}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
