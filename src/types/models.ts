// TODO: all of these definitely subject to change
export type Exec = {
    name: string;
    image: string;
    description: string;
};

export type Project = {
    name: string;
    description: string;
    logo: string;
};

export type AboutCardType = {
    title: string;
    content: string;
    image: string;
    imageAlt: string;
};

export type PastEventType = string;
