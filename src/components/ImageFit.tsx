import React from "react";
import Image from "next/image";

const ImageFit = ({
    src,
    alt,
    width = "150px",
    height = "80px",
}: {
    src: string;
    alt: string;
    width?: string;
    height?: string;
}) => {
    return (
        <div style={{ position: "relative", width: width, height: height }}>
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
