"use client";

import React, { Suspense } from "react";

/* default light for a 3d scene */
export const CommonLight = () => (
    <Suspense fallback={null}>
        <ambientLight intensity={2.5} />
        <pointLight position={[20, 30, 10]} intensity={35} decay={0.2} />
        <pointLight position={[-10, -10, -10]} intensity={5} color="white" decay={0.2} />
        <pointLight position={[-10, -10, 10]} intensity={10} decay={0.2} />
    </Suspense>
);
