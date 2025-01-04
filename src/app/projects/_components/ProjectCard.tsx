import React from "react";

import { Project } from "@/types/models";

import { ProjectTag } from "./ProjectTag";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex w-min flex-col overflow-hidden rounded-2xl bg-gray-50">
            <div className="center-content h-60 w-[520px] bg-[linear-gradient(106.75deg,#8FA7FF_0.97%,#4525A7_99.03%)] text-white">
                Image Here
            </div>
            <div className="flex flex-col p-11">
                <h1 className="mb-1 text-2xl font-bold">{project.name}</h1>
                <p className="mb-6 font-normal">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 whitespace-nowrap">
                    <ProjectTag className="bg-blue-100" tagText={`${project.year} project`} />
                    {project.technologies.map((technology, index) => (
                        <ProjectTag className="bg-gray-100" tagText={technology} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
