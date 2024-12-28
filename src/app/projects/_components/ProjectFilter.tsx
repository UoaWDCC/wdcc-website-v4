import React from "react";

import { Project } from "@/types/models";

import { projectsData } from "../_data/projects.data";

interface ProjectFilterProps {
    projects: Project[];
}
export function ProjectFilter({ projects }: ProjectFilterProps) {
    const availableYears = Array.from(new Set(projects.map((project) => project.year)));

    return (
        <div className="flex">
            <p>Filter By year</p>
        </div>
    );
}
