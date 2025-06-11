
export type ProjectMember = {
    name: string;
    role: "developer" | "techlead" | "designer" | "manager" | "tutor";
    image?: {
        src: string;
        alt: string;
    };
};

export type Team = {
    techlead: { name: string; image?: { src: string; alt: string } };
    manager: { name: string; image?: { src: string; alt: string } };
    members: ProjectMember[];
};
