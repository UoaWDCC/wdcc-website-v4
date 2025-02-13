import type { Project as CMSProject, Media } from "@/payload-types";

import type { Project } from "../models";

export const ParsePayloadProject = (cms: CMSProject): Project | undefined => {
    if (!cms) return undefined;

    return {
        projectName: cms.name.default,
        projectNameExtended: cms.name.extended || undefined,
        client: cms.client,
        description: cms.description,
        descriptionExtended: cms.brief.description,
        logo: (cms.cardImage as Media)?.url || undefined,
        year: cms.year,
        technologies: cms.technologies?.flatMap((tech) => tech ?? []) || [],
        slug: cms.slug || undefined,
        team: {
            techlead: { name: cms.team.techlead.name, image: (cms.team.techlead.image as Media)?.url || undefined },
            manager: { name: cms.team.manager.name, image: (cms.team.manager.image as Media)?.url || undefined },
            members:
                cms?.team?.members?.map((member) => ({
                    name: member.name,
                    role: member.role,
                    image: (member.image as Media)?.url || undefined,
                })) || [],
        },
    };
};
