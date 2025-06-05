import type { ProjectsPage as CmsProjectPage } from "@/types/payload-types";

import { ProjectsPage } from "../pages/ProjectsPage";

export const ParsePayloadProjectPage = (CmsProjectPage: CmsProjectPage): ProjectsPage | undefined => {
    if (!CmsProjectPage) {
        return undefined;
    }

    return {
        header: {
            title: CmsProjectPage.header.title,
            content: CmsProjectPage.header.content,
            buttons:
                CmsProjectPage.header.buttons.map((button) => ({
                    text: button.text,
                    link: button.link,
                })) ?? [],
        },
        infoSection: {
            main: CmsProjectPage.infoSection.main,
            checkboxes: {
                title: CmsProjectPage.infoSection.checkboxes.title,
                checks: CmsProjectPage.infoSection.checkboxes.checks?.map((check) => check.text) ?? [],
            },
        },
        operationSection: {
            title: CmsProjectPage.operationSection.title,
            content: CmsProjectPage.operationSection.content,
        },
        rolesSection: {
            title: CmsProjectPage.rolesSection.title,
            roles:
                CmsProjectPage.rolesSection.roles?.map((role) => ({
                    color: role.color,
                    title: role.title,
                    slug: role.slug,
                    description: role.description,
                })) ?? [],
        },
        featuredSection: {
            title: CmsProjectPage.featuredSection.title,
            cta: CmsProjectPage.featuredSection.cta,
        },
    };
};
