import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { ParsePayloadProject } from "@/types/mapper/mapCMSToProject";
import { Project } from "@/types/models";

import { getProject } from "@/actions/getProject";
import ProjectHeader from "@/components/layout/pageheaders/ProjectHeader";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import { projectsData } from "../_data/projects_data/index";
import IndividualProject from "./_component/IndividualProject";

type Props = {
    params: Promise<{ slug: string }>;
};

// auto generated seo metadata for each project
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const slug = (await params).slug;

    const project = projectsData.find((project) => project.slug === slug);

    // get og-image of previous page
    const previousImages = (await parent).openGraph?.images || [];

    if (!project) {
        return {};
    }

    return {
        title: project.projectName,
        description: project.description,
        openGraph: {
            images: [...previousImages],
        },
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    console.log(slug);
    let project = projectsData.find((project) => project.slug === slug) as Project | undefined;

    // if no hard coded project search payload CMS
    if (!project) project = ParsePayloadProject(await getProject(slug));
    if (!project) {
        notFound();
    }

    return (
        <StandardPageLayout>
            <ProjectHeader backlink={{ label: "projects", href: "/projects" }} title={project.projectName} />
            <IndividualProject project={project} />
        </StandardPageLayout>
    );
}
