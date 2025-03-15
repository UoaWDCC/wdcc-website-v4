"use client";

import { createContext, useContext } from "react";

import { useLocalStorage } from "@/hooks/useLocalStorage";

type ReduceMotionType = {
    reduceMotion: boolean;
    action: {
        toggleReduceMotion: () => void;
    };
};

const ReduceMotionContext = createContext<ReduceMotionType>({
    reduceMotion: false,
    action: { toggleReduceMotion: () => {} },
});

const ReduceMotionProvider = ({ children }: { children: React.ReactNode }) => {
    // if check for reduce motion in localstorage or return default
    const [reduceMotion, setReduceMotion] = useLocalStorage<boolean>("reduce-motion", detectReduceMotion());

    console.log("reduce  motion status:", reduceMotion);

    const toggleReduceMotion = () => setReduceMotion(!reduceMotion);

    // Check for reduce motion
    function detectReduceMotion() {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const isReduced = !mediaQuery || mediaQuery.matches;

        return isReduced;
    }

    const value: ReduceMotionType = {
        reduceMotion: reduceMotion,
        action: { toggleReduceMotion },
    };

    return <ReduceMotionContext.Provider value={value}>{children}</ReduceMotionContext.Provider>;
};

const useReduceMotion = () => {
    const context = useContext(ReduceMotionContext);
    if (context === undefined) throw new Error("useReduceMotion must be used within a ReduceMotionContext");
    return context;
};

export type { ReduceMotionType };
export { useReduceMotion };
export default ReduceMotionProvider;
