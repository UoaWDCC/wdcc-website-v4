import type { Project as CMSProject, Media } from "@/payload-types";

import type { Project } from "../models";

export const ParsePayloadProject = (cms: CMSProject): Project | undefined => {
    if (!cms) return undefined;

    return {
        slug: cms.slug,
        year: cms.year,
        client: cms.client,
        icon: {
            src: cms.url || "",
            alt: cms.slug || "",
        },
        name: {
            title: cms.name.default,
            extended: cms.name.extended || undefined,
        },
        description: cms.description,
        brief: {
            description: cms.brief.description,
            image: (!!cms.brief.image || undefined) && {
                src: (cms.brief.image as Media).url as string,
                alt: (cms.brief.image as Media).alt as string,
            },
        },
        primaryLink: cms.primaryLink && {
            label: cms.primaryLink.label,
            href: cms.primaryLink.href,
        },
        secondaryLink: cms.secondaryLink && {
            label: cms.secondaryLink.label,
            href: cms.secondaryLink.href,
        },
        technologies: cms.technologies?.flatMap((tech) => tech ?? []) || [],
        team: {
            techlead: {
                name: cms.team.techlead.name,
                image: (!!cms.team.techlead.image || undefined) && {
                    src: (cms.team.techlead.image as Media).url as string,
                    alt: (cms.team.techlead.image as Media).alt as string,
                },
            },
            manager: {
                name: cms.team.manager.name,
                image: (!!cms.team.manager.image || undefined) && {
                    src: (cms.team.manager.image as Media).url as string,
                    alt: (cms.team.manager.image as Media).alt as string,
                },
            },
            members:
                cms?.team?.members?.map((member) => ({
                    name: member.name,
                    role: member.role,
                    image: (!!member.image || undefined) && {
                        src: (member.image as Media).url as string,
                        alt: (member.image as Media).alt as string,
                    },
                })) || [],
        },
    };
};
