import React from "react";
import Link from "next/link";

import { Project } from "@/types/models";

import { ProjectTag } from "./ProjectTag";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const slug = project.slug || "not-found";
    return (
        <Link className="flex w-full flex-col overflow-hidden rounded-2xl bg-gray-50" href={`/projects/${slug}`}>
            <div className="center-content h-60 w-full bg-[linear-gradient(106.75deg,#8FA7FF,#4525A7)] text-white">
                Image Here
            </div>
            <div className="flex flex-col px-12 py-10 gap-6">
                <div className="flex flex-col gap-3">
                    <h2 className="leading-none text-2xl font-bold">{project.name}</h2>
                    <p className="leading-[1.25]">{project.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 whitespace-nowrap">
                    <ProjectTag className="bg-blue-100 text-blue-800" tagText={`${project.year} project`} />
                    {project.technologies.map((technology, index) => (
                        <ProjectTag className="bg-gray-100" tagText={technology} key={index} />
                    ))}
                </div>
            </div>
        </Link>
    );
}
