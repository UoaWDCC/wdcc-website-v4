"use client";

import { useGLTF } from "@react-three/drei";
import { PrimitiveProps } from "@react-three/fiber";

export function WDCC({ props }: { props?: PrimitiveProps }) {
    const { scene } = useGLTF("/wdcc2.glb");

    return <primitive object={scene} {...props} />;
}
