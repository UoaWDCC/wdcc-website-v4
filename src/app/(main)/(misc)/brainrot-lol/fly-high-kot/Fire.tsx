"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import adsf from "./_glsl/flamesFragment.glsl";
import asd from "./_glsl/vertexShader.glsl";

export const Fire = () => {
    //   const three = useThree();
    //   console.log(three);
    const meshRef = useRef<THREE.Mesh>(null);
    const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null);

    useFrame(({ clock }) => {
        if (shaderMaterialRef.current) {
            shaderMaterialRef.current.uniforms.uTime.value = clock.getElapsedTime();
        }
    });
    return (
        <>
            <mesh ref={meshRef}>
                <planeGeometry args={[2, 2, 32, 32]} />
                <shaderMaterial
                    ref={shaderMaterialRef}
                    vertexShader={asd}
                    fragmentShader={adsf}
                    transparent
                    uniforms={{ uTime: { value: 0 } }}
                />
            </mesh>
        </>
    );
};
