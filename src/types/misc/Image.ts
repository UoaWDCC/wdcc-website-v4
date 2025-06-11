import { StaticImport } from "next/dist/shared/lib/get-img-props";

// ImageType to avoid clashes with library Image types (looking at you, Next...)
export type ImageType = {
    src: string | StaticImport;
    alt: string;
};
