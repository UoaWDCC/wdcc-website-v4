"use client";

import { MutableRefObject, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";

const Scene = dynamic(() => import("@/components/three/scene/Scene"), { ssr: false });

const ThreeLayout = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={ref}
            style={{
                position: "relative",
                width: " 100%",
                height: "100%",
                overflow: "auto",
                touchAction: "auto",
            }}
        >
            <div className="relative flex h-dvh min-h-dvh flex-col overflow-x-hidden">{children}</div>
            {/* background scene by default */}
            {/* @ts-expect-error - no children */}
            <Scene
                style={{
                    zIndex: -1,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    pointerEvents: "none",
                }}
                eventSource={ref as MutableRefObject<HTMLDivElement>}
                eventPrefix="client"
            />
        </motion.div>
    );
};

export default ThreeLayout;
