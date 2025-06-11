import StandardPageLayout from "@/components/layout/StandardPageLayout";
import Header from "@/components/layout/pageheaders/Header";
import { ParsePayloadProject } from "@/payload/collections/projects/ParsePayloadProject";
import { getAllProjects } from "@/payload/collections/projects/getAllProjects";
import ProjectsSection from "../_components/ProjectsSection";

export default async function ProjectsPage() {
    const projects = (await getAllProjects()).map(ParsePayloadProject);

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="All projects"
                backlink={{ label: "projects", href: "/projects" }}
            />
            <ProjectsSection projects={projects} />
        </StandardPageLayout>
    );
}
