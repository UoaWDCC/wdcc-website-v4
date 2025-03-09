// import { ReactNode } from "react";
import React from "react";

import { Project } from "@/types/models";
import { ParsePayloadProject } from "@/types/parser/ParsePayloadProject";

import { getAllProjects } from "@/actions/getAllProjects";
import ProjectsSection from "@app/projects/_components/ProjectsSection";

export default async function PastProjects() {
    const projects = (await getAllProjects()).map(ParsePayloadProject) as Project[];

    return (
        <div className="flex flex-col gap-2 text-center">
            <h2 className=" font-bold text-4xl">been there, done that.</h2>
            <p className="text-md leading-tight md:w-[75%] mx-auto">
                There are plenty of projects on offer at WDCC; check out some of our past work!
            </p>
            <ProjectsSection projects={projects.slice(0,3)}/>
        </div>
    )

}
