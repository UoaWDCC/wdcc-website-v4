"use client";

import { useTexture } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

export function WDCCThreeLogo({ props }: { props?: ThreeElements["mesh"] }) {
    const texture = useTexture("/brand/webster-transparent.PNG");
    texture.colorSpace = THREE.SRGBColorSpace;

    return (
        <mesh {...props}>
            <planeGeometry args={[1.14, 1.5]} />
            <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} toneMapped={false} />
        </mesh>
    );
}
