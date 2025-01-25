import { notFound } from "next/navigation";

import RouteDisplay from "@/components/debug/RouteDisplay";
import ProjectHeader from "@/components/layout/pageheaders/ProjectHeader";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import { projectsData } from "../_data/projects_data/index";
import IndividualProject from "./_component/IndividualProject";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    const project = projectsData.find((p) => p.slug === `/${slug}`);

    if (!project) {
        notFound();
    }

    return (
        <StandardPageLayout>
            <RouteDisplay slug={slug} />
            <ProjectHeader backlink={{ label: "projects", href: "/projects" }} title={project.projectName} />
            <IndividualProject project={project} />
        </StandardPageLayout>
    );
}
