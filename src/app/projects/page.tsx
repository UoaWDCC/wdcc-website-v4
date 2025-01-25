"use client";

import { useState } from "react";

import StandardPageLayout from "@/components/layout/StandardPageLayout";

import { ProjectCard } from "./_components/ProjectCard";
import { ProjectFilter } from "./_components/ProjectFilter";
import { projectsData } from "./_data/projects_data/index";

export default function ProjectsPage() {
    const [selectedYear, setYear] = useState<string | null>(null);

    const filterByYear = (category: string) => () => {
        setYear((prevYear) => (prevYear === category ? null : category));
    };

    const filteredProjects = selectedYear
        ? projectsData.filter((project) => project.year === selectedYear)
        : projectsData;

    const sortedProjects = [...filteredProjects].sort((a, b) => Number(b.year) - Number(a.year));

    return (
        <StandardPageLayout>
            <div className="my-10 flex w-full flex-col">
                <ProjectFilter projects={projectsData} setSelectedYear={filterByYear} selectedYear={selectedYear} />
                <div className="flex flex-wrap justify-center gap-8">
                    {sortedProjects.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </StandardPageLayout>
    );
}
