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
        <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="flex w-full flex-col gap-2">
                <h2 className="text-4xl leading-none font-bold">been there, done that.</h2>
                <p className="text-md mx-auto leading-tight md:w-[75%]">
                    There are plenty of projects on offer at WDCC; check out some of our past work!
                </p>
            </div>

            <Button href="/projects/all" variant={{ color: "light", style: "secondary" }}>
                All past projects
            </Button>
            {/*<ProjectsSection projects={projects}/>*/}
        </div>
    );
}
