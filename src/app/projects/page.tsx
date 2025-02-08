import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import ProjectRoleCard from "@/app/projects/_components/ProjectRoleCard";
import Checklist from "@/components/primitives/Checklist";
import { ProjectCard } from "./_components/ProjectCard";
import { projectsData } from "./_data/projects_data/index";
import { Button } from "@/components/primitives/Button";


export default function ProjectsPage() {
    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "primary", color: "blue" }}
                title="projects"
                description="Projects are your chance to build amazing, real world projects for genuine community clients. Develop your skills, work in an industry-like team environment, and gain practical work experience - all alongside motivated peers! "
                primaryButton={{
                    label: "Apply for a project",
                    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                }} // TODO remove, but lol
                secondaryButton={{ label: "Past WDCC Projects", href: "/projects/all" }}
            />

            <div className="flex flex-col gap-24 py-24">

                <div className="flex gap-8">
                    <div className="flex flex-col gap-8 sm:w-[60%]">
                        <p className="leading-tight whitespace-pre-line text-md font-semibold">
                            WDCC Projects are pro-bono web development projects for external student groups, charities,
                            and other organisations, worked on by small teams of 10-12 WDCC members.
                        </p>

                        <div className="flex flex-col gap-4">
                            <p className="font-semibold text-md">
                                By participating in WDCC Projects, you get to:
                            </p>
                            <div className="flex flex-col gap-4 pl-4">
                                <Checklist label={"Work on a real product, used by real people."} checked={true} />
                                <Checklist label={"Gain practical experience alongside friends and peers."}
                                           checked={true} />

                                <Checklist label={"Experience an Agile development team."} checked={true} />
                                <Checklist label={"Learn industry best-practices in a comfortable environment."}
                                           checked={true} />
                                <Checklist label={"Boost your CV!"} checked={true} />

                            </div>

                        </div>
                    </div>


                </div>

                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">How we operate projects</h2>
                    <p>Graphic here (TBA)</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold py-10">Project Roles</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 sm:px-8">
                        <ProjectRoleCard variant={{ color: "blue" }} title={"Developer"}
                                         description={"WDCC Developers are the heart of every project team. You could work on anything - from adding a brand-new CMS through to keyframing in CSS."}
                                         slug={"developer"} />
                        <ProjectRoleCard variant={{ color: "purple" }} title={"Designer"}
                                         description={"WDCC Designers are a step beyond theory. You'll navigate genuine design problems with a real-world project backed by a large technical team."}
                                         slug={"designer"} />
                        <ProjectRoleCard variant={{ color: "yellow" }} title={"Tech Lead"}
                                         description={"WDCC Tech Leads get the senior dev experience (without the clout). Direct a large student team, and make your CV shine along the way."}
                                         slug={"techlead"} />
                        <ProjectRoleCard variant={{ color: "green" }} title={"Project Manager"}
                                         description={"WDCC PMs get to handle communication and Agile workflows in industry-like ways, but helped by friends instead of managers."}
                                         slug={"projectmanager"} />

                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">Featured past projects</h2>
                    <div className="grid gap-6 lg:grid-cols-2">

                        {
                            //TODO logic to make this work
                        }

                        <ProjectCard project={projectsData[0]}/>
                        <ProjectCard project={projectsData[1]}/>
                    </div>
                    <Button variant={{style: "secondary", color:"yellow"}} href="/projects/all" className="mx-auto">
                        View all past projects
                    </Button>
                </div>

            </div>

        </StandardPageLayout>
    );
}
