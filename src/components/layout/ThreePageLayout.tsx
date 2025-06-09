"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import { useProgress } from "@react-three/drei";
import { motion } from "motion/react";

import { fadeopacity } from "@/libs/animations";
import { useReduceMotion } from "@/providers/ReduceMotionProvider";
import { useWebGL } from "@/providers/WebGLProvider";

import ReduceMotionButton from "../ReduceMotionButton";
import NavigationBar from "../navigation/navbar/NavigationBar";

const Scene = dynamic(() => import("@/components/three/scene/Scene"), { ssr: false });

const DebounceTimer = 50;

const ThreeLayout = ({ children }: { children: React.ReactNode }) => {
    const progress = useProgress();
    const [isLoaded, setLoaded] = useState(false);
    // const { scrollRef } = useScroll();

    const { webglSupport } = useWebGL();
    const { reduceMotion } = useReduceMotion();

    const threeSupport = webglSupport && !reduceMotion;

    useEffect(() => {
        const loadId = setTimeout(() => {
            if (progress.total === progress.loaded && progress.item !== "") {
                setLoaded(true);
            }
        }, DebounceTimer);
        return () => {
            clearTimeout(loadId);
        };
    }, [progress]);

    return (
        <>
            <NavigationBar />
            <motion.div
                // ref={scrollRef} commenting out to bind scrollContainer to HTML for landing page
                initial="initial"
                animate={isLoaded || !threeSupport ? "animate" : "initial"}
                variants={fadeopacity}
                style={{
                    position: "relative",
                    width: " 100%",
                    height: "100%",
                    touchAction: "auto",
                }}
            >
                <ReduceMotionButton />
                <div className="relative flex h-dvh min-h-dvh flex-col">{children}</div>
                {/* background scene by default */}
                {threeSupport && (
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
                )}
            </motion.div>
        </>
    );
};

export default ThreeLayout;
