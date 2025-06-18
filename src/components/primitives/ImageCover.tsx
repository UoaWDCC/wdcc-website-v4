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

// the exact same component except now theres cover 😭
// TODO ANTON: merge this into ImageFit.tsx and add a prop to choose between cover and contain
const ImageCover = ({ src, alt, width = "150px", height = "80px", className }: ImageFitProps) => {
    return (
        <div className={cn("", className)} style={{ position: "relative", minWidth: width, minHeight: height }}>
            <Image
                priority
                fill
                sizes="100%"
                alt={alt}
                src={src}
                style={{
                    objectFit: "cover",
                }}
            />
        </div>
    );
};

export default ImageCover;
