"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useProgress } from "@react-three/drei";
import { motion } from "motion/react";

import { fadeopacity } from "@/libs/animations";

import NavigationBar from "../navigation/navbar/NavigationBar";

const Scene = dynamic(() => import("@/components/three/scene/Scene"), { ssr: false });

const DebounceTimer = 50;

const ThreeLayout = ({ children }: { children: React.ReactNode }) => {
    const progress = useProgress();
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadId = setTimeout(() => {
            if (progress.total === progress.loaded && progress.item !== "") {
                setLoaded(true);
            }
        }, DebounceTimer);
        return () => clearTimeout(loadId);
    }, [progress]);

    return (
        <>
            <NavigationBar />
            <motion.div
                initial="initial"
                animate={isLoaded ? "animate" : "initial"}
                variants={fadeopacity}
                style={{
                    position: "relative",
                    width: " 100%",
                    height: "100%",
                    overflowX: "hidden",
                    touchAction: "auto",
                }}
            >
                <div className="relative flex h-dvh min-h-dvh flex-col">{children}</div>
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
        </>
    );
};

export default ThreeLayout;
