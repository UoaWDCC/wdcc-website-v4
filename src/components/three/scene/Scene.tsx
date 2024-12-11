"use client";

import { Preload } from "@react-three/drei";
import { Canvas, CanvasProps } from "@react-three/fiber";
import * as THREE from "three";

import { t } from "../globals/tunnel";

export default function Scene({ ...props }: CanvasProps) {
    // stolen from https://github.com/pmndrs/react-three-next
    // Everything defined in here will persist between route changes, only children are swapped

    return (
        <>
            <Canvas {...props} onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
                <t.Out />
                <Preload all />
            </Canvas>
        </>
    );
}

Scene.displayName = "Scene";
