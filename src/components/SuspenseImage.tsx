"use client";

import React, { useEffect, useState } from "react";
import NextImage, { type ImageProps } from "next/image";

const SuspenseImage = ({ ...props }: ImageProps) => {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const img = new window.Image();
            img.src = (props?.src || "") as string;
            img.onload = () => setLoaded(true);
        }
    }, [props.src]);

    if (!isLoaded) {
        return (
            <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="h-3 w-3 animate-bounce rounded-full bg-white"
                        style={{
                            animationDelay: `${i * 0.15}s`,
                        }}
                    />
                ))}
            </div>
        );
    }

    return <NextImage {...props} />;
};

export default SuspenseImage;
