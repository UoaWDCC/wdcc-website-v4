import React from "react";

import { Project } from "@/payload-types";

import { FilterTag } from "./FilterTag";

interface ProjectFilterProps {
    projects: Project[];
    setSelectedYear: (year: string) => () => void;
    selectedYear: string | null;
}

export function ProjectFilter({ projects, setSelectedYear, selectedYear }: ProjectFilterProps) {
    const availableYears = Array.from(new Set(projects.map((project) => project.year)));

    return (
        <div className="mb-9 flex items-center justify-center gap-4 lg:justify-start">
            <p className="text-md font-semibold">Filter By year</p>
            <div className="flex gap-3">
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
