"use client";

import React, { useState } from "react";

import { Project } from "@/types/models";

import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
    const [selectedYear, setYear] = useState<string | null>(null);

    const filterByYear = (category: string) => () => {
        setYear((prevYear) => (prevYear === category ? null : category));
    };

    const filteredProjects = selectedYear ? projects.filter((project) => project.year === selectedYear) : projects;

    const sortedProjects = [...filteredProjects].sort((a, b) => Number(b.year) - Number(a.year));

    return (
        <div className="my-24 flex w-full flex-col">
            <ProjectFilter projects={projects} setSelectedYear={filterByYear} selectedYear={selectedYear} />
            <div className="grid gap-6 lg:grid-cols-2">
                {sortedProjects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
