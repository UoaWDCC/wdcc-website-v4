"use client";

import React, { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";

/* default camera and light for a 3d scene */
export const CommonLight = () => (
    <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[20, 30, 10]} intensity={20} decay={0.2} />
        <pointLight position={[-10, -10, -10]} color="white" decay={0.2} />
        <PerspectiveCamera makeDefault fov={20} position={[0, 0, 5]} />
    </Suspense>
);
