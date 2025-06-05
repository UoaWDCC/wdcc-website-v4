import React from "react";
import Link from "next/link";

import { Project } from "@/types/models";

import WDCCLogo from "@/assets/svg/WDCCLogo";
import SuspenseImage from "@/components/SuspenseImage";

import { ProjectTag } from "./ProjectTag";

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    const { year, slug } = project;

    return (
        <Link
            className="hover:drop-shadow-cardLift flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-gray-50 transition duration-500 will-change-auto hover:-translate-x-1 hover:-translate-y-1 hover:duration-200"
            href={`/projects/${year}/${slug}`}
        >
            <div className="center-content bg-blue-brand relative h-60 w-full">
                {project.icon ? (
                    <SuspenseImage fill className="object-cover" src={project.icon.src} alt={project.icon.alt} />
                ) : (
                    <WDCCLogo className="w-40 fill-white" />
                )}
            </div>
            <div className="flex flex-col gap-6 px-12 py-10">
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl leading-none font-bold">{project.name.title}</h2>
                    <p className="leading-[1.25]">{project.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 whitespace-nowrap">
                    <ProjectTag className="bg-blue-100 text-blue-800" tagText={`${project.year} project`} />
                    {project.technologies?.map((technology, index) => (
                        <ProjectTag className="bg-gray-100" tagText={technology} key={index} />
                    ))}
                </div>
            </div>
        </Link>
    );
}
