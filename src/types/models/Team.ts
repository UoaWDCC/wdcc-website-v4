import { ImageType } from "../misc/Image";

type Role = "developer" | "techlead" | "designer" | "manager" | "tutor";

type ProjectMember = {
    name: string;
    role: Role;
    image?: ImageType;
};

export type Team = {
    techlead: {
        name: string;
        image?: ImageType;
    };
    manager: {
        name: string;
        image?: ImageType;
    };
    members: ProjectMember[];
};
