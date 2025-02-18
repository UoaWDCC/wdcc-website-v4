import React from "react";
import Image, { StaticImageData } from "next/image";

export interface ImageFitProps {
    src: string | StaticImageData;
    alt: string;
    width?: string;
    height?: string;
}

const ImageFit = ({ src, alt, width = "150px", height = "80px" }: ImageFitProps) => {
    return (
        <div style={{ position: "relative", minWidth: width, minHeight: height }}>
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
