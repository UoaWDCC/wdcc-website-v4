import { Image } from "../misc/Image";

type Role = "developer" | "techlead" | "designer" | "manager" | "tutor";

type ProjectMember = {
    name: string;
    role: Role;
    image?: Image;
};

export type Team = {
    techlead: {
        name: string;
        image?: Image;
    };
    manager: {
        name: string;
        image?: Image;
    };
    members: ProjectMember[];
};
