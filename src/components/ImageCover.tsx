import React from "react";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/libs/utils";

export interface ImageFitProps {
    src: string | StaticImageData;
    alt: string;
    width?: string;
    height?: string;
    className?: string;
}

//the exact same component except now theres cover 😭
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
