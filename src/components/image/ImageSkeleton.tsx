"use client";

import { motion } from "framer-motion";

export const ImageSkeleton = ({ width, height }: { width: number; height: number }) => {
    return (
        <div
            style={{ aspectRatio: `${width} / ${height}` }}
            className="grid size-full place-items-center rounded-[inherit] border"
        >
            <motion.p key="loading" exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
                Loading...
            </motion.p>
        </div>
    );
};
