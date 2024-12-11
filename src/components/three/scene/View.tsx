"use client";

import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { OrbitControls, View as ViewImpl } from "@react-three/drei";

import { Three } from "./Three";

interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    orbit?: boolean;
}

const View = forwardRef(({ children, orbit, ...props }: ViewProps, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current);

    return (
        <>
            <div ref={localRef} {...props} />
            <Three>
                <ViewImpl track={localRef as MutableRefObject<HTMLDivElement>}>
                    {children}
                    {orbit && <OrbitControls />}
                </ViewImpl>
            </Three>
        </>
    );
});
View.displayName = "View";

export { View };
