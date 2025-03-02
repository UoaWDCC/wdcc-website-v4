"use client";

import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

type ScrollContainerType = HTMLDivElement | (Window & typeof globalThis);

type ScrollContextType = {
    /** The main scrollable component on the page. */
    scrollRef: RefObject<HTMLDivElement>;
    /** Get reference to scrollable container. Throws error if the page doesn't have one. */
    getScrollContainer: () => ScrollContainerType;
    /** Get the current scrollY value of the scrollable container. */
    getScrollY: () => number;
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

    // Purely because window and scrollRef.current have different APIs
    function getScrollY() {
        if (!scrollRef.current) {
            return window.scrollY;
        } else {
            return scrollRef.current.scrollTop;
        }
    }

    const contextValue = {
        scrollRef,
        getScrollContainer,
        getScrollY,
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
