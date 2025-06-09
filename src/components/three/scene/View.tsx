"use client";

import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from "react";

import { OrbitControls, View as ViewImpl } from "@react-three/drei";

import { useReduceMotion } from "@/providers/ReduceMotionProvider";
import { useWebGL } from "@/providers/WebGLProvider";

import { Three, ThreeBackground } from "./Three";

type ViewProps = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    orbit?: boolean;
    background?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const View = forwardRef(({ children, orbit, background, fallback, ...props }: ViewProps, ref) => {
    const localRef = useRef<HTMLDivElement>(null);

    const { webglSupport } = useWebGL();
    const { reduceMotion } = useReduceMotion();

    const threeSupport = webglSupport && !reduceMotion;

    useImperativeHandle(ref, () => localRef.current);

    if (!threeSupport) return fallback;

    return (
        <>
            <div ref={localRef} {...props} />
            {background ? (
                <ThreeBackground>
                    <ViewImpl track={localRef as MutableRefObject<HTMLDivElement>}>
                        {children}
                        {orbit && <OrbitControls />}
                    </ViewImpl>
                </ThreeBackground>
            ) : (
                <Three>
                    <ViewImpl track={localRef as MutableRefObject<HTMLDivElement>}>
                        {children}
                        {orbit && <OrbitControls />}
                    </ViewImpl>
                </Three>
            )}
        </>
    );
});
View.displayName = "View";

export { View };
