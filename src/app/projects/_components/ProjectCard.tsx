import React from "react";

import { Project } from "@/types/models";

import { ProjectTag } from "./ProjectTag";

interface ProjectCardProps {
    project: Project;
}
export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-9 overflow-hidden rounded-lg bg-gray-50">
            <div className="center-content h-60 w-full bg-[linear-gradient(106.75deg,#8FA7FF_0.97%,#4525A7_99.03%)] text-white">
                Image Here
            </div>
            <div className="mx-[43px] mb-[43px] flex flex-col">
                <h1 className="mb-1 text-2xl font-bold">{project.name}</h1>
                <p className="mb-6 w-[448px] font-normal">{project.description}</p>
                <div className="flex gap-2">
                    <ProjectTag color={"blue-150"} tagText={`${project.year} project`} />
                    {project.technologies.map((technology, index) => (
                        <ProjectTag color={"gray-100"} tagText={technology} />
                    ))}
                </div>
            </div>
        </div>
    );
}
