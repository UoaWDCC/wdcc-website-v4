"use client";

import React, { Suspense } from "react";

/* default light for a 3d scene */
export const CommonLight = () => (
    <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[20, 30, 10]} intensity={20} decay={0.2} />
        <pointLight position={[-10, -10, -10]} color="white" decay={0.2} />
        <pointLight position={[-10, -10, 10]} intensity={2} decay={0.2} />
    </Suspense>
);
