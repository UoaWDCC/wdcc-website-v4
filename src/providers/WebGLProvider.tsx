"use client";

import { createContext, useContext, useEffect, useState } from "react";

type WebGLContextType = {
    webglSupport: boolean | undefined;
};

const webGLContext = createContext<WebGLContextType>({ webglSupport: undefined });

const WebGLProvider = ({ children }: { children: React.ReactNode }) => {
    const [webglSupport, setWebglSupport] = useState<boolean | undefined>(undefined);

    // Create a canvas element that is never added to the DOM and check if webgl is supported
    function detectWebGLContext() {
        const canvas = document.createElement("canvas");

        // Get WebGLRenderingContext from canvas element
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        const supportWebGL = gl instanceof WebGLRenderingContext;

        return supportWebGL;
    }

    const value: WebGLContextType = {
        webglSupport: webglSupport,
    };

    useEffect(() => {
        setWebglSupport(detectWebGLContext());
    }, []);

    if (webglSupport === undefined) return null; // prevent hydration error

    return <webGLContext.Provider value={value}>{children}</webGLContext.Provider>;
};

const useWebGL = () => {
    const context = useContext(webGLContext);
    if (context === undefined) throw new Error("useWebGL must be used within a WebGLProvider");
    return context;
};

export type { WebGLContextType };
export { useWebGL };
export default WebGLProvider;
