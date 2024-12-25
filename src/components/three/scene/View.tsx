"use client";

import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { OrbitControls, View as ViewImpl } from "@react-three/drei";

import { Three, ThreeBackground } from "./Three";

interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    orbit?: boolean;
    background?: boolean;
}

const View = forwardRef(({ children, orbit, background, ...props }: ViewProps, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current);

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
