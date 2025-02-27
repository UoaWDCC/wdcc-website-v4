import { Project } from "@/types/models";
import { ParsePayloadProject } from "@/types/parser/ParsePayloadProject";

import { getAllProjects } from "@/actions/getAllProjects";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import ProjectsSection from "../_components/ProjectsSection";
import { projectsData } from "../_data/projects_data";

export default async function ProjectsPage() {
    const projects = (await getAllProjects()).map(ParsePayloadProject);
    const combined = [...projects, ...projectsData] as Project[];

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="past projects"
                backlink={{ label: "projects", href: "/projects" }}
            />
            <ProjectsSection projects={combined} />
        </StandardPageLayout>
    );
}
