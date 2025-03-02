"use client";

import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

type ScrollContainerType = HTMLDivElement | (Window & typeof globalThis);

type ScrollContextType = {
    /** The main scrollable component on the page. */
    scrollRef: RefObject<HTMLDivElement>;
    /** Get reference to scrollable container. Throws error if the page doesn't have one. */
    getScrollContainer: () => ScrollContainerType;
    /** Scroll to a specific location on the page - either a scrollY value or a querySelection (e.g. #myid). */
    scrollTo: (loc: number | string) => void;
};

const scrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    function getScrollContainer() {
        if (!scrollRef.current) {
            console.log("No scroll container found - defaulting to window");
            return window;
        }
        return scrollRef.current;
    }

    function scrollTo(loc: number | string) {
        if (typeof loc === "number") {
            getScrollContainer().scroll({ top: loc, behavior: "smooth" });
        } else {
            // Loc is a string
            const element = document.querySelector(loc);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    const contextValue = {
        scrollRef,
        getScrollContainer,
        scrollTo,
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
