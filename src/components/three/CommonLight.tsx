"use client";

import React, { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { ColorRepresentation } from "three";

/* default camera and light for a 3d scene */
export const CommonLight = ({ color }: { color?: ColorRepresentation }) => (
    <Suspense fallback={null}>
        {color && <color attach="background" args={[color]} />}
        <ambientLight />
        <pointLight position={[20, 30, 10]} intensity={20} decay={0.2} />
        <pointLight position={[-10, -10, -10]} color="white" decay={0.2} />
        <PerspectiveCamera makeDefault fov={20} position={[0, 0, 6]} />
    </Suspense>
);
