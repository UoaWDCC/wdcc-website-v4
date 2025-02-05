"use client";

import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useGUI } from "@/hooks/useGUI";

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
            <FloatImage offset={((Math.PI * 2) / 4) * 0} speed={speed} src="/images/heroImage_1.png" />
            <FloatImage offset={((Math.PI * 2) / 4) * 1} speed={speed} src="/images/heroImage_2.png" />
            <FloatImage offset={((Math.PI * 2) / 4) * 2} speed={speed} src="/images/heroImage_3.png" />
            <FloatImage offset={((Math.PI * 2) / 4) * 3} speed={speed} src="/images/heroImage_4.png" />
        </group>
    );
};

interface FloatImageProps {
    offset: number;
    src: string;
    speed?: number;
}

const FloatImage = ({ offset, src, speed = 0.5 }: FloatImageProps) => {
    const meshRef = React.useRef<THREE.Mesh>(null!);
    const textureLoader = new THREE.TextureLoader();
    const image = textureLoader.load(src);
    const alpha = textureLoader.load("/images/alphamask.png");
    image.colorSpace = THREE.SRGBColorSpace;

    useFrame((state) => {
        // const mod = Math.ceil(state.clock.elapsedTime * 0.5);

        if (meshRef.current) {
            const x = Math.cos(state.clock.elapsedTime * speed + offset) * 1.6;
            const z = Math.sin(state.clock.elapsedTime * speed + offset) * 1;
            // const x = Math.cos(mod * ((Math.PI * 2) / 2) * 0.5 + offset) * 1.6;
            // const z = Math.sin(mod * ((Math.PI * 2) / 2) * 0.5 + offset) * 1;
            // console.log(x);
            // meshRef.current.lookAt(state.camera.position);
            // meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.01);
            // meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, z, 0.01);
            meshRef.current.position.set(x, -0, z);
        }
    });
    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshBasicMaterial map={image} alphaMap={alpha} transparent />
        </mesh>
    );
};

export default HeroImages;
