"use client";

import { useState } from "react";

import StandardPageLayout from "@/components/StandardPageLayout";

import { ProjectCard } from "./_components/ProjectCard";
import { ProjectFilter } from "./_components/ProjectFilter";
import { projectsData } from "./_data/projects.data";

export default function ProjectsPage() {
    const [SelectedYear, SetYear] = useState<string>("");

    const filterByYear = (category: string) => () => {
        SetYear((prevYear) => (prevYear === category ? "" : category));
    };

    const filteredProjects = SelectedYear
        ? projectsData.filter((project) => project.year === SelectedYear)
        : projectsData;

    return (
        <StandardPageLayout>
            <div className="flex w-full justify-center">
                <div className="mb-10 mt-10 flex w-[1100px] flex-col">
                    <ProjectFilter projects={projectsData} setSelectedYear={filterByYear} selectedYear={SelectedYear} />
                    <div className="flex flex-wrap justify-center gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard project={project} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </StandardPageLayout>
    );
}
