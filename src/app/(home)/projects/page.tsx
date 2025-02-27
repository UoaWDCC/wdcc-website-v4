import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";
import { Button } from "@/components/primitives/Button";
import Checklist from "@/components/primitives/Checklist";

import { ProjectCard } from "./_components/ProjectCard";
import ProjectRoleCard from "./_components/ProjectRoleCard";
import { projectsData } from "./_data/projects_data";
import { projectsCopy } from "./_data/projects.data";

export default function ProjectsPage() {
    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "primary", color: "blue" }}
                title="Projects"
                description="Projects are your chance to build amazing, real world projects for genuine community clients. Develop your skills, work in an industry-like team environment, and gain practical work experience - all alongside motivated peers! "
                primaryButton={{
                    label: "Apply for a project",
                    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                }} // TODO remove, but lol
                secondaryButton={{ label: "Past WDCC Projects", href: "/projects/all" }}
            />

            <div className="flex flex-col gap-24 py-24">
                <div className="flex gap-8">
                    <div className="flex flex-col gap-8 sm:w-[60%]">
                        <p className="whitespace-pre-line text-md font-semibold leading-tight">
                            {projectsCopy.infoSection.main}
                        </p>

                        <div className="flex flex-col gap-4">
                            <p className="text-md font-semibold">{projectsCopy.infoSection.checkboxes.title}</p>
                            <div className="flex flex-col gap-4 pl-4">
                                {projectsCopy.infoSection.checkboxes.checks.map((content, i) => (
                                    <Checklist label={content} key={i} checked={true} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">{projectsCopy.operationSection.title}</h2>
                    <p>{projectsCopy.operationSection.content}</p>
                </div>

                <div>
                    {/* id for navbar link */}
                    <h2 id="roles" className="py-10 text-3xl font-bold">{projectsCopy.rolesSection.title}</h2>
                    <div className="grid grid-cols-1 gap-8 sm:px-8 lg:grid-cols-2">
                        {projectsCopy.rolesSection.roles.map((role, i) => (
                            <ProjectRoleCard
                                variant={{ color: role.color }}
                                title={role.title}
                                description={role.description}
                                slug={role.slug}
                                key={i}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">{projectsCopy.featuredSection.title}</h2>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {
                            //TODO logic to make this work
                        }

                        <ProjectCard project={projectsData[0]} />
                        <ProjectCard project={projectsData[1]} />
                    </div>
                    <Button variant={{ style: "secondary", color: "yellow" }} href="/projects/all" className="mx-auto">
                        {projectsCopy.featuredSection.cta}
                    </Button>
                </div>
            </div>
        </StandardPageLayout>
    );
}
