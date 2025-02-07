"use client";

import { useState } from "react";

import Header from "@/components/layout/pageheaders/Header";
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
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="past projects"
                backlink={{ label: "projects", href: "/projects" }}
            />

            <div className="my-24 flex w-full flex-col">
                <ProjectFilter projects={projectsData} setSelectedYear={filterByYear} selectedYear={selectedYear} />
                <div className="grid gap-6 lg:grid-cols-2">
                    {sortedProjects.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </StandardPageLayout>
    );
}
