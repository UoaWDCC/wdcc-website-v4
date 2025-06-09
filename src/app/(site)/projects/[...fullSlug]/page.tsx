import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { ParsePayloadProject } from "@/types/parser/ParsePayloadProject";

import { getProject } from "@/actions/getProject";
import StandardPageLayout from "@/components/layout/StandardPageLayout";
import ProjectHeader from "@/components/layout/pageheaders/ProjectHeader";

import IndividualProject from "./_component/IndividualProject";

type Props = {
    // fullSlug = [year, slug]
    params: Promise<{ fullSlug: string[] }>;
};

// auto generated seo metadata for each project
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const project = await getProjectFromSlug((await params).fullSlug);

    // get og-image of previous page
    const previousImages = (await parent).openGraph?.images ?? [];

    if (!project) {
        return {};
    }

    return {
        title: project.name.title,
        description: project.description,
        openGraph: {
            images: [...previousImages],
        },
    };
}

export default async function Page({ params }: Props) {
    const project = await getProjectFromSlug((await params).fullSlug);

    return (
        <StandardPageLayout>
            <ProjectHeader
                backlink={{ label: "projects", href: "/projects/all" }}
                title={project.name.title}
                primaryButton={project.primaryLink}
                secondaryButton={project.secondaryLink}
            />
            <IndividualProject project={project} />
        </StandardPageLayout>
    );
}

async function getProjectFromSlug(fullSlug: string[]) {
    if (fullSlug.length != 2) {
        notFound();
    }

    const [year, slug] = fullSlug;
    const cmsProject = await getProject(year, slug);
    if (!cmsProject) {
        notFound();
    }

    return ParsePayloadProject(cmsProject);
}
