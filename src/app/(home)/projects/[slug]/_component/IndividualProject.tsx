import React from "react";

import { Project } from "@/types/models";

import { getTechnologySvgWithName } from "@/assets/svg/technologies";
import ImageFit from "@/components/ImageFit";

import TeamMemberCard from "./TeamMemberCard";

interface IndividualProjectProps {
    project: Project;
}

const IndividualProject = ({ project }: IndividualProjectProps) => {
    const technologies = project?.technologies?.map((tech) => {
        return getTechnologySvgWithName(tech);
    });

    return (
        <div className="flex flex-col py-16">
            <div className="grid grid-cols-2 gap-16">
                {/* todo: replace with real data soon. payload? */}
                {/* I agree */} {/* done 🔥😎 */}
                <p className="text-md">
                    <strong className="text-md">
                        {project.projectNameExtended}
                        <br />
                        <br />
                        {project.client}
                    </strong>
                    <br />
                    <br />
                    {project.descriptionExtended}
                </p>
                <ImageFit src={project.logo || "/"} alt="" height="300px" width="500px" />
            </div>
            <div className="mt-8 flex flex-col gap-4">
                <h3 className="text-3xl font-semibold">Technologies</h3>
                <hr />
                <div className="flex flex-wrap gap-12">
                    {technologies &&
                        technologies.map((tech) => {
                            if (!tech) return;
                            return (
                                <div
                                    key={tech.name}
                                    className="relative flex flex-col items-center justify-center gap-2 p-2"
                                >
                                    {<tech.component className="mb-4 h-12 w-12" />}
                                    <p className="absolute bottom-0">{tech.name}</p>
                                </div>
                            );
                        })}
                </div>
                <hr />
            </div>
            <div className="mt-8 flex flex-col items-center gap-8">
                <h3 className="text-3xl font-semibold">Meet the project team</h3>
                <div className="flex justify-center gap-4">
                    <TeamMemberCard
                        variant={{ role: "manager" }}
                        name={project.team.manager.name}
                        role="Project Manager"
                    />
                    <TeamMemberCard variant={{ role: "techlead" }} name={project.team.techlead.name} role="Tech Lead" />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {project?.team?.members?.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            variant={{ role: member.role }}
                            name={member.name}
                            role={member.role}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndividualProject;
