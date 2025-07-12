export type CertificateType = {
    uuid: string;
    name: string;
    role: string;
    project: { name: string; link: string };
    date: { year: string; month: string };
};

export const receiver: CertificateType = {
    uuid: "1234",
    name: "Nate Williamson",
    role: "Technical Lead",
    project: { name: "Younite", link: "https://younite.io/" },
    date: { year: "2024", month: "November" },
};

export const receivers: CertificateType[] = [
    {
        uuid: "1",
        name: "Nate Williamson",
        role: "Technical Lead",
        project: { name: "Younite", link: "https://younite.io/" },
        date: { year: "2024", month: "November" },
    },
    {
        uuid: "2",
        name: "Nate Williamson2",
        role: "Technical pog",
        project: { name: "Younite", link: "https://younite.io/" },
        date: { year: "2024", month: "November" },
    },
];
