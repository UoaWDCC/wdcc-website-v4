"use client";

import { createContext, useContext, useEffect, useState } from "react";

type WebGLContextType = {
    reduceMotion: boolean;
    action: {
        toggleReduceMotion: () => void;
    };
};

const ReduceMotionContext = createContext<WebGLContextType>({
    reduceMotion: false,
    action: { toggleReduceMotion: () => {} },
});

const ReduceMotionProvider = ({ children }: { children: React.ReactNode }) => {
    const [reduceMotion, setReduceMotion] = useState<boolean>(false);

    const toggleReduceMotion = () => setReduceMotion(!reduceMotion);

    // Check for reduce motion
    function detectReduceMotion() {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const isReduced = !mediaQuery || mediaQuery.matches;

        return isReduced;
    }

    const value: WebGLContextType = {
        reduceMotion: reduceMotion,
        action: { toggleReduceMotion },
    };

    useEffect(() => {
        setReduceMotion(detectReduceMotion());
    }, []);

    return <ReduceMotionContext.Provider value={value}>{children}</ReduceMotionContext.Provider>;
};

const useReduceMotion = () => {
    const context = useContext(ReduceMotionContext);
    if (context === undefined) throw new Error("useReduceMotion must be used within a ReduceMotionContext");
    return context;
};

export type { WebGLContextType };
export { useReduceMotion as useWebGL };
export default ReduceMotionProvider;
