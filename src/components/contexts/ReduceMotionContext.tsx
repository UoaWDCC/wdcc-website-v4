"use client";

import { createContext, useContext } from "react";
import { useLocalStorage } from "@/utils/hooks/useLocalStorage";

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

    const toggleReduceMotion = () => {
        setReduceMotion(!reduceMotion);
    };

    // Check for reduce motion
    function detectReduceMotion() {
        if (typeof window === "undefined") return false;

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        // @ts-expect-error TODO ASHTON
        const isReduced = !mediaQuery ?? mediaQuery.matches;

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

export { ReduceMotionProvider, useReduceMotion };
export type { ReduceMotionType };
