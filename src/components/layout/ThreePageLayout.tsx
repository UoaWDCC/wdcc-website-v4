"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useProgress } from "@react-three/drei";
import { motion } from "motion/react";

import { fadeopacity } from "@/libs/animations";

const Scene = dynamic(() => import("@/components/three/scene/Scene"), { ssr: false });

const ThreeLayout = ({ children }: { children: React.ReactNode }) => {
    const [isLoaded, setLoaded] = useState(false);
    const [wasActive, setWasActive] = useState(false);
    const progress = useProgress();

    useEffect(() => {
        setWasActive(progress.active);
        setLoaded(progress.total === progress.loaded && wasActive);
    }, [progress, wasActive]);

    return (
        <motion.div
            // active == loading
            initial="initial"
            animate={isLoaded ? "animate" : "initial"}
            variants={fadeopacity}
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
            />
        </motion.div>
    );
};

export default ThreeLayout;
