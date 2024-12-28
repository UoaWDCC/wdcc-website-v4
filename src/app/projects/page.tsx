import StandardPageLayout from "@/components/StandardPageLayout";

import { ProjectCard } from "./_components/ProjectCard";
import { ProjectFilter } from "./_components/ProjectFilter";
import { projectsData } from "./_data/projects.data";

export default function ProjectsPage() {
    return (
        <StandardPageLayout>
            <ProjectFilter projects={projectsData} />
            <div className="flex w-[1100px] flex-wrap gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </StandardPageLayout>
    );
}
