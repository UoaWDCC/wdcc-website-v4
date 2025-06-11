import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Exec = {
    name: string;
    role: string;
    image?: string | StaticImport;
    description: string;
    joined: string;
    id?: string | null;
};
