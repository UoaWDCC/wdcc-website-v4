import { ParsePayloadProjectPage } from "@/types/parser/ParsePayloadProjectPage";

import { getProjectsPage } from "@/actions/Pages/getProjectsPage";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";
// import { Button } from "@/components/primitives/Button";
import Checklist from "@/components/primitives/Checklist";

// import { ProjectCard } from "./_components/ProjectCard";
import ProjectRoleCard from "./_components/ProjectRoleCard";
// import { projectsData } from "./_data/projects_data";
import { projectsCopy as hardCodedProjectPage } from "./_data/projects.data";

export default async function ProjectsPage() {
    let projectsCopy = ParsePayloadProjectPage(await getProjectsPage());
    if (!projectsCopy) {
        projectsCopy = hardCodedProjectPage;
    }

    /*TEMPORARY CMS BYPASS FOR PROJECT ROLE CARDS - FIX LATER*/
    const roleCardsCopy = hardCodedProjectPage;

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "primary", color: "blue" }}
                title="Projects"
                description="Projects are your chance to build amazing, real world projects for genuine community clients. Develop your skills, work in an industry-like team environment, and gain practical work experience - all alongside motivated peers! "
                primaryButton={{
                    label: "Apply for a project",
                    href: "https://forms.gle/o3jij89qCLMoDcr28",
                }}
                secondaryButton={{ label: "Past WDCC projects", href: "/projects/all" }}
            />

            <div className="flex flex-col gap-24 py-24">
                <div className="flex gap-8">
                    <div className="flex flex-col gap-8 sm:w-[60%]">
                        <p className="whitespace-pre-line text-md font-semibold leading-tight">
                            {projectsCopy.infoSection.main}
                        </p>

                        <div className="flex flex-col gap-4">
                            <p className="text-md font-semibold">{projectsCopy.infoSection.checkboxes.title}</p>
                            <div className="flex flex-col gap-4 sm:pl-4">
                                {projectsCopy.infoSection.checkboxes.checks.map((content, i) => (
                                    <Checklist label={content} key={i} checked={true} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Commenting out as we need copy */}
                {/* <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">{projectsCopy.operationSection.title}</h2>
                    <p>{projectsCopy.operationSection.content}</p>
                </div> */}

                <div>
                    {/* id for navbar link */}
                    <h2 id="roles" className="py-10 text-3xl font-bold">
                        {projectsCopy.rolesSection.title}
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:px-8 lg:grid-cols-2">
                        {roleCardsCopy.rolesSection.roles.map((role, i) => (
                            <ProjectRoleCard
                                variant={{ color: role.color }}
                                title={role.title}
                                description={role.description}
                                slug={role.slug}
                                graphic={role.graphic}
                                key={i}
                            />
                        ))}
                    </div>
                </div>

                {/* Need copy */}
                {/* <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">{projectsCopy.featuredSection.title}</h2>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <ProjectCard project={projectsData[0]} />
                        <ProjectCard project={projectsData[1]} />
                    </div>
                    <Button variant={{ style: "secondary", color: "yellow" }} href="/projects/all" className="mx-auto">
                        {projectsCopy.featuredSection.cta}
                    </Button>
                </div> */}
            </div>
        </StandardPageLayout>
    );
}
