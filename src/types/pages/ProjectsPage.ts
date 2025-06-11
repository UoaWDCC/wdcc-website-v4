import { ButtonType } from "../misc/Button";

export type Role = {
    color: "blue" | "purple" | "yellow" | "green";
    title: string;
    slug: string;
    description: string;
};

export type ProjectsPage = {
    header: {
        title: string;
        content: string;
        buttons: ButtonType[];
    };
    infoSection: {
        main: string;
        checkboxes: {
            title: string;
            checks: string[];
        };
    };
    operationSection: {
        title: string;
        content: string;
    };
    rolesSection: {
        title: string;
        roles: Role[];
    };
    featuredSection: {
        title: string;
        cta: string;
    };
};
