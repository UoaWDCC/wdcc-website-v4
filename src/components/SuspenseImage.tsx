"use client";

import React, { useEffect, useState } from "react";
import NextImage, { type ImageProps } from "next/image";
import { motion, Variants } from "motion/react";

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
                    <motion.div
                        key={i}
                        className="h-3 w-3 rounded-full bg-white"
                        initial="initial"
                        animate="animate"
                        variants={bounceVariants}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                        }}
                    />
                ))}
            </div>
        );
    }

    return <NextImage {...props} />;
};

const bounceVariants: Variants = {
    initial: { scale: 0 },
    animate: { scale: [0, 1, 0] },
};

export default SuspenseImage;
