// import { ReactNode } from "react";
import React from "react";
import { Button } from "@/components/primitives/Button";

// import { ParsePayloadProject } from "@/types/parser/ParsePayloadProject";
//
// import { getAllProjects } from "@/actions/getAllProjects";
// import ProjectsSection from "@app/projects/_components/ProjectsSection";

export default function PastProjects() {
    // const projects = (await getAllProjects()).map(ParsePayloadProject);

    return (
        <div className="flex flex-col gap-8 text-center justify-center items-center">
            <div className="flex flex-col gap-2 w-full">
                <h2 className=" font-bold text-4xl leading-none">been there, done that.</h2>
                <p className="text-md leading-tight md:w-[75%] mx-auto">
                    There are plenty of projects on offer at WDCC; check out some of our past work!
                </p>
            </div>

            <Button href="/projects/all" variant={{ color: "light", style: "secondary" }}>All past projects</Button>
            {/*<ProjectsSection projects={projects}/>*/}
        </div>
    )

}
