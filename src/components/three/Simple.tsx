"use client";

import { ReactNode, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Common } from "./View";

type SimpleProps = {
    children: ReactNode;
};

/* simple 3d scene setup */
const Simple = ({ children }: SimpleProps) => {
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