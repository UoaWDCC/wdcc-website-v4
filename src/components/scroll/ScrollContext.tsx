"use client";

import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

type ScrollContextType = {
    /** The main scrollable component on the page. */
    scrollRef: RefObject<HTMLElement>;
    /** Get reference to scrollable container. Throws error if the page doesn't have one. */
    getScrollContainer: () => HTMLElement;
    scrollToTop: () => void;
};

const scrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const scrollRef = useRef<HTMLElement>(null);

    function getScrollContainer() {
        if (!scrollRef.current) {
            throw new Error("No scroll container found");
        }
        return scrollRef.current;
    }

    function scrollToTop() {
        getScrollContainer().scroll({ top: 0, behavior: "smooth" });
    }

    const contextValue = {
        scrollRef,
        getScrollContainer,
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
};
