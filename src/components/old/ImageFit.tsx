import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/utils/misc";

export type ImageFitProps = {
    src: string | StaticImageData | StaticImport;
    alt: string;
    width?: string;
    height?: string;
    className?: string;
};

const ImageFit = ({ src, alt, width = "150px", height = "80px", className }: ImageFitProps) => {
    return (
        <div className={cn("", className)} style={{ position: "relative", minWidth: width, minHeight: height }}>
            <Image
                priority
                fill
                sizes="100%"
                alt={alt}
                src={src}
                style={{
                    objectFit: "contain",
                }}
            />
        </div>
    );
};

export default ImageFit;
