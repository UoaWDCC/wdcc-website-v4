import PageHeader from "@/components/layout/pageheaders/PageHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
// import { Button } from "@/components/primitives/Button";
import Checklist from "@/components/primitives/Checklist";
import { getProjectsPage } from "@/payload/globals/projectspage/getProjectsPage";
// import { ProjectCard } from "./_components/ProjectCard";
import ProjectRoleCard from "./_components/ProjectRoleCard";
import { roleCardsCopy } from "./_data/projects.data";

export default async function ProjectsPage() {
    const projectsData = await getProjectsPage();

    /* TODO: TEMPORARY CMS BYPASS FOR PROJECT ROLE CARDS - FIX LATER*/
    const rolesData = roleCardsCopy;

    return (
        <StandardPageLayout>
            <PageHeader
                variant={{ style: "primary", color: "blue" }}
                title="Projects"
                description="Projects are your chance to build amazing, real world projects for genuine community clients. Develop your skills, work in an industry-like team environment, and gain practical work experience - all alongside motivated peers! "
                //PROJECT SIGNUP LINK
                primaryButton={{
                    label: "View all projects",
                    href: "/projects/all",
                }}
                secondaryButton={{ label: "Past WDCC projects", href: "/projects/all" }}
            />

            <div className="flex flex-col gap-24 py-24">
                <div className="flex gap-8">
                    <div className="flex flex-col gap-8 sm:w-[60%]">
                        <p className="text-md leading-tight font-semibold whitespace-pre-line">
                            {projectsData.infoSection.main}
                        </p>

                        <div className="flex flex-col gap-4">
                            <p className="text-md font-semibold">{projectsData.infoSection.checkboxes.title}</p>
                            <div className="flex flex-col gap-4 sm:pl-4">
                                {projectsData.infoSection.checkboxes.checks.map((content, i) => (
                                    <Checklist label={content} key={i} checked={true} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Commenting out as we need copy */}
                {/* <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">{projectsData.operationSection.title}</h2>
                    <p>{projectsData.operationSection.content}</p>
                </div> */}

                <div>
                    {/* id for navbar link */}
                    <h2 id="roles" className="py-10 text-3xl font-bold">
                        {projectsData.rolesSection.title}
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:px-8 lg:grid-cols-2">
                        {rolesData.rolesSection.roles.map((role, i) => (
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

                {/* Need copy */}
                {/* <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">{projectsData.featuredSection.title}</h2>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <ProjectCard project={projectsData[0]} />
                        <ProjectCard project={projectsData[1]} />
                    </div>
                    <Button variant={{ style: "secondary", color: "yellow" }} href="/projects/all" className="mx-auto">
                        {projectsData.featuredSection.cta}
                    </Button>
                </div> */}
            </div>
        </StandardPageLayout>
    );
}
