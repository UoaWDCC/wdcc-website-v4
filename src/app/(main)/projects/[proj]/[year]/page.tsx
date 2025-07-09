import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import ProjectHeader from "@/components/layout/pageheaders/ProjectHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { getAllProjects } from "@/payload/collections/projects/getAllProjects";
import { getProject } from "@/payload/collections/projects/getProject";
import { parseProject } from "@/payload/collections/projects/parseProject";
import IndividualProject from "../_components/IndividualProject";

// [proj]/[year] params
type Props = {
    params: Promise<{ proj: string; year: string }>;
};

export async function generateStaticParams() {
    const projects = await getAllProjects();
    return projects.map((project) => ({
        proj: project.slug,
        year: project.year,
    }));
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { proj, year } = await params;
    const project = await getProjectFromParams({ proj, year });
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
    const { proj, year } = await params;
    const project = await getProjectFromParams({ proj, year });
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

async function getProjectFromParams(params: { proj: string; year: string }) {
    const { proj, year } = params;
    if (!proj || !year) {
        notFound();
    }
    const cmsProject = await getProject(year, proj);
    if (!cmsProject) {
        notFound();
    }
    return parseProject(cmsProject);
}
