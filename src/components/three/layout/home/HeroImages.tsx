"use client";

import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const HeroImages = () => {
    return (
        <group>
            <FloatImage offset={((Math.PI * 2) / 4) * 0} src="/images/heroImage_1.png" />
            <FloatImage offset={((Math.PI * 2) / 4) * 1} src="/images/heroImage_2.png" />
            <FloatImage offset={((Math.PI * 2) / 4) * 2} src="/images/heroImage_3.png" />
            <FloatImage offset={((Math.PI * 2) / 4) * 3} src="/images/heroImage_4.png" />
        </group>
    );
};

const FloatImage = ({ offset, src }: { offset: number; src: string }) => {
    const meshRef = React.useRef<THREE.Mesh>(null!);
    const image = new THREE.TextureLoader().load(src);
    image.colorSpace = THREE.SRGBColorSpace;

    useFrame((state) => {
        // const mod = Math.ceil(state.clock.elapsedTime * 0.5);

        if (meshRef.current) {
            console.log(state.clock.elapsedTime);
            const x = Math.cos(state.clock.elapsedTime * 0.5 + offset) * 1.6;
            const z = Math.sin(state.clock.elapsedTime * 0.5 + offset) * 1;
            // const x = Math.cos(mod * ((Math.PI * 2) / 2) * 0.5 + offset) * 1.6;
            // const z = Math.sin(mod * ((Math.PI * 2) / 2) * 0.5 + offset) * 1;
            console.log(x);
            // meshRef.current.lookAt(state.camera.position);
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.01);
            meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, z, 0.01);
            // meshRef.current.position.set(x, -0, z);
        }
    });
    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshBasicMaterial map={image} />
        </mesh>
    );
};

export default HeroImages;
