"use client";

import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

type ScrollContextType = {
    /** The main scrollable component on the page */
    scrollRef: RefObject<HTMLDivElement>;
    scrollToTop: () => void;
};

const scrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const isBrowser = () => typeof window !== "undefined";
    function scrollToTop() {
        if (!isBrowser()) {
            console.log("Attempted to scroll to top but not in browser");
            return;
        }
        if (!scrollRef.current) {
            console.log("Attempted to scroll to top but no scroll container");
            return;
        }
        console.log("Scrolling to top");
        scrollRef.current.scroll({ top: 0, behavior: "smooth" });
    }

    const contextValue = {
        scrollRef,
        scrollToTop,
    };

    return <scrollContext.Provider value={contextValue}>{children}</scrollContext.Provider>;
};

export const useScroll = () => {
    const contextValue = useContext(scrollContext);
    if (!contextValue) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    return contextValue;
}
