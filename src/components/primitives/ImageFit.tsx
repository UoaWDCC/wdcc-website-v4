import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/utils/misc";

export type ImageFitProps = {
    src: string | StaticImageData | StaticImport;
    alt: string;
    width?: string;
    height?: string;
    className?: string;
    objectFit?: "cover" | "contain";
    preload?: boolean;
};

const ImageFit = ({
    src,
    alt,
    width = "150px",
    height = "80px",
    className,
    objectFit = "contain",
    preload = false,
}: ImageFitProps) => {
    return (
        <div className={cn("", className)} style={{ position: "relative", minWidth: width, minHeight: height }}>
            <Image
                preload={preload}
                fill
                sizes="100%"
                alt={alt}
                src={src}
                style={{
                    objectFit,
                }}
            />
        </div>
    );
};

export default ImageFit;
