"use client";

import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGUI } from "@/hooks/useGUI";

// TODO ASHTON: refactor this so that it supports multiple animations
const HeroImages = () => {
    const [speed, setSpeed] = useState(0.5);

    useGUI((gui) => {
        const folder = gui.addFolder("HeroImages");
        const params = {
            speed: speed,
        };

        folder.add(params, "speed", 0, 10).onFinishChange((c) => {
            setSpeed(c);
        });

        return () => {
            folder.reset();
        };
    });

    return (
        <group>
            {images.map((image, index) => {
                return <FloatImage key={image} offset={offsets[index]} rps={speed} src={images[index]} />;
            })}
        </group>
    );
};

// TODO ASHTON: move to another file when there are more stuff
// should probably only have 4 images max
const images = [
    "/images/heroImage_1.png",
    "/images/heroImage_2.png",
    "/images/heroImage_3.png",
    "/images/heroImage_4.png",
] as const;
const offsets = images.map((_, i) => ((Math.PI * 2) / images.length) * i); // offsets to space images evenly
const phaseRotation = (Math.PI * 2) / images.length; // amount image should be rotated by phase amount
const phaseOffset = Math.PI / images.length; // fixed phase offset to put images on the side of the logo instead of center

type FloatImageProps = {
    offset: number;
    src: string;
    rps?: number;
};

const FloatImage = ({ offset, src, rps = 0.5 }: FloatImageProps) => {
    const meshRef = React.useRef<THREE.Mesh>(null);
    const textureLoader = new THREE.TextureLoader();
    const image = textureLoader.load(src);
    const alpha = textureLoader.load("/images/alphamask.png");
    image.colorSpace = THREE.SRGBColorSpace;

    let phase = 0;
    useFrame((state) => {
        // incremental variant
        if (meshRef.current) {
            // this get the time as whole number
            const mod = Math.ceil(state.clock.elapsedTime * rps);
            phase = THREE.MathUtils.lerp(phase, mod, 0.01);

            if (mod - phase > 2) {
                phase = mod; // this is to prevent rapid rotation when user tab in and out of the page
            }

            const radiants = phase * phaseRotation + offset + phaseOffset;
            const x = Math.cos(radiants) * 1.6;
            const z = Math.sin(radiants) * 1;
            meshRef.current.position.set(x, -0, z);
        }

        // linear variant
        // if (meshRef.current) {
        // const x = Math.cos(state.clock.elapsedTime * speed + offset) * 1.6;
        // const z = Math.sin(state.clock.elapsedTime * speed + offset) * 1;
        // meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.01);
        // meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, z, 0.01);
        // }
    });
    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshBasicMaterial map={image} alphaMap={alpha} transparent />
        </mesh>
    );
};

export default HeroImages;
