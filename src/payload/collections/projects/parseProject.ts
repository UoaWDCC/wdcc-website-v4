import type { Project } from "@/types/models/Project";
import { media } from "@/payload/mock";
import type { Project as CMSProject } from "@/payload/payload-types";
import { isNullish, removeDuplicates } from "@/utils/misc";

export const parseProject = (cms: CMSProject): Project => {
    return {
        slug: cms.slug,
        year: cms.year,
        client: cms.client,
        icon: media(cms.thumbnail),
        name: {
            title: cms.name,
            extended: cms.extendedName ?? undefined,
        },
        description: cms.description,
        brief: {
            description: cms.extendedDescription,
            image: media(cms.image),
        },
        primaryLink: cms.primaryLink && {
            label: cms.primaryLink.label,
            href: cms.primaryLink.href,
        },
        secondaryLink: cms.secondaryLink && {
            label: cms.secondaryLink.label,
            href: cms.secondaryLink.href,
        },
        technologies: removeDuplicates(cms.technologies),
        difficulty: cms.difficulty,
        team: {
            techlead: {
                name: cms.techlead.name,
                image: isNullish(cms.techlead.image) ? undefined : media(cms.techlead.image),
            },
            manager: {
                name: cms.manager.name,
                image: isNullish(cms.manager.image) ? undefined : media(cms.manager.image),
            },
            members:
                cms.members?.map((member) => ({
                    ...member,
                    image: isNullish(member.image) ? undefined : media(member.image),
                })) ?? [],
        },
    };
};
