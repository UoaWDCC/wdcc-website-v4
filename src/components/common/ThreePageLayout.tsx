"use client";

import { MutableRefObject, useRef } from "react";
import dynamic from "next/dynamic";

import LoadingScreen from "../three/globals/LoadingScreen";

const Scene = dynamic(() => import("@/components/three/scene/Scene"), { ssr: false });

const ThreeLayout = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                width: " 100%",
                height: "100%",
                overflow: "auto",
                touchAction: "auto",
            }}
        >
            <LoadingScreen />
            <div className="relative flex h-dvh min-h-dvh flex-col overflow-x-hidden">{children}</div>
            {/* @ts-expect-error - no children */}
            <Scene
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    pointerEvents: "none",
                }}
                eventSource={ref as MutableRefObject<HTMLDivElement>}
                eventPrefix="client"
            />
        </div>
    );
};

export default ThreeLayout;
