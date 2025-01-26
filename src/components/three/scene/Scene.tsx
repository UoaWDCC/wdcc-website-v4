"use client";

import { Preload } from "@react-three/drei";
import { Canvas, CanvasProps } from "@react-three/fiber";
import * as THREE from "three";

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
                <bg.Out />
                <Preload all />
            </Canvas>
            <Canvas className="z-10" {...props} onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
                <t.Out />
                <Preload all />
            </Canvas>
        </>
    );
}

Scene.displayName = "Scene";
