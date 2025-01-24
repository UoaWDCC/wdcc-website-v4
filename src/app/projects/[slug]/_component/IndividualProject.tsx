import React from "react";

import { Project } from "@/types/models";

import ImageFit from "@/components/ImageFit";

import TeamMemberCard from "./TeamMemberCard";

interface IndividualProjectProps {
    project: Project;
}

const IndividualProject = ({ project }: IndividualProjectProps) => {
    return (
        <div className="flex flex-col py-16">
            <div className="grid grid-cols-2 gap-16">
                {/* todo: replace with real data soon. payload? */}
                <p className="text-md">
                    <strong className="text-md">
                        Event Registration and Payment Portal for UABC (University of Auckland Badminton Club)
                        <br />
                        <br />
                        Client: University of Auckland Badminton Club
                    </strong>
                    <br />
                    <br />
                    The University of Auckland Badminton Club (UABC) is a club dedicated to bringing people interested
                    in badminton together. Their mission is to maintain and provide a diverse and engaging badminton
                    experience to all. With their main target market being students, they value affordability critically
                    and are devoted to creating an affordable and sustainable platform for students interested in
                    badminton.
                </p>
                <ImageFit src="/projectmock/uabc.png" alt="" height="300px" width="500px" />
            </div>
            <div className="mt-8 flex flex-col gap-4">
                {/* todo: add an 's' to the end if multiple */}
                <h3 className="text-3xl font-semibold">Technologies</h3>
                <hr />
                <div className="flex gap-4">
                    <p>awawawa</p>
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
                    {project.team.members.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            variant={{ role: member.role as "engineer" | "techlead" | "designer" | "manager" }}
                            name={member.name}
                            role={member.role as "engineer" | "techlead" | "designer" | "manager"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndividualProject;
