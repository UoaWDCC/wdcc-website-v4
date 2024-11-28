"use client";

import React, { useEffect } from "react";
import { default as NextImage, StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface SuspenseImageProps extends StaticImageData {
    src: string;
    alt: string;
    fallback: React.ReactNode;
}
export const SuspenseImage = ({ src, alt, fallback, ...props }: SuspenseImageProps) => {
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoading(false);
        };
        img.src = src;
    }, [src]);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                fallback
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="image">
                    <NextImage src={src} alt={alt} {...props} onLoadingComplete={() => setLoading(false)} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
