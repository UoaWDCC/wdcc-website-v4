"use client";

import { useEffect } from "react";
import { Preload } from "@react-three/drei";
import { Canvas, CanvasProps, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useWebGL } from "@/providers/WebGLProvider";
import { bg, t } from "../globals/tunnel";

export default function Scene({ ...props }: Omit<CanvasProps, "children">) {
    // stolen from https://github.com/pmndrs/react-three-next
    // Everything defined in here will persist between route changes, only children are swapped

    return (
        <>
            {/* background 3d */}
            <Canvas
                {...props}
                className="-z-10 blur-[6px]"
                onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
            >
                <WebGLContextDetection />
                <bg.Out />
                <Preload all />
            </Canvas>
            <Canvas className="z-10" {...props} onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
                <WebGLContextDetection />
                <t.Out />
                <Preload all />
            </Canvas>
        </>
    );
}

const WebGLContextDetection = () => {
    const { gl } = useThree();
    const { action } = useWebGL();
    useEffect(() => {
        const abortController = new AbortController();
        const glCanvas = gl.domElement;
        if (glCanvas) {
            glCanvas.addEventListener("webglcontextlost", action.handleContextFailure, {
                signal: abortController.signal,
            });
        }
        // debugging code
        // gl.getContext().getExtension("WEBGL_lose_context")?.loseContext();
        return () => {
            abortController.abort();
        };
    }, [gl, action.handleContextFailure]);

    return null;
};

Scene.displayName = "Scene";
