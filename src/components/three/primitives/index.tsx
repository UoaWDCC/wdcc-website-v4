"use client";

import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

export function WDCCThreeLogo({ props }: { props?: ThreeElements["primitive"] }) {
    const { scene } = useGLTF("/wdcc.glb");

    return <primitive object={scene} {...props} />;
}
