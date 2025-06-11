import StandardPageLayout from "@/components/layout/StandardPageLayout";
import Header from "@/components/layout/pageheaders/Header";
import { getAllProjects } from "@/payload/collections/projects/getAllProjects";
import { parseProject } from "@/payload/collections/projects/parseProject";
import ProjectsSection from "../_components/ProjectsSection";

export default async function ProjectsPage() {
    const projects = (await getAllProjects()).map(parseProject);

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
