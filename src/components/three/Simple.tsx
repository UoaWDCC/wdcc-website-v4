"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Common } from "./View";

/* simple 3d scene setup */
const Simple = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={null}>
            <Canvas className="-z-10">
                <Common />
                {children}
            </Canvas>
        </Suspense>
    );
};

export default Simple;
