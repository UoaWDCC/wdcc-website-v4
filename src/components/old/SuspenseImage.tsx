"use client";

import { useEffect, useState } from "react";
import NextImage, { type ImageProps } from "next/image";
import SimpleLoading from "./loading/SimpleLoading";

const SuspenseImage = ({ ...props }: ImageProps) => {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const img = new window.Image();
            img.src = (props.src ?? "") as string;
            img.onload = () => {
                setLoaded(true);
            };
        }
    }, [props.src]);

    if (!isLoaded) {
        return <SimpleLoading />;
    }

    return <NextImage {...props} />;
};

export default SuspenseImage;
