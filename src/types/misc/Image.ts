import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Image = {
    src: string | StaticImport;
    alt: string;
};
