import React from "react";

import { Project } from "@/types/models";

import placeholder600_400 from "@/assets/image/600x400.png";
import { getTechnologySvgWithName } from "@/assets/svg/technologies";
import Duo from "@/components/Duo";
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
            <Duo image={{ src: project.brief.image?.src, alt: project.brief.image?.alt }}>
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold">{project.name.extended}</h3>
                    <br />
                    <h4 className="text-md font-semibold">{project.client}</h4>
                    <br />
                    <p>{project.brief.description}</p>
                </div>
            </Duo>
            <div className="mt-8 flex flex-col gap-4">
                <h2 className="text-center text-3xl font-semibold md:text-left">Technologies</h2>
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
                <h2 className="text-center text-3xl font-semibold md:text-left">Meet the project team</h2>
                <div className="flex flex-col justify-center gap-4 md:flex-row">
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
