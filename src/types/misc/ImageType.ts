import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ImageType = {
    src: string | StaticImport;
    alt: string;
};
