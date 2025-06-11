import { RefObject, useCallback, useEffect, useRef, useState } from "react";

type Position = {
    position: { x: number; y: number };
    normal: { rx: number; ry: number };
};

type Settings = {
    persist?: boolean;
};

/*
    this hook is used to get the mouse position inside of an element,
    position top, left position of the element
    normal is the mouse position in the range of -1 to 1 in x and y axis
*/
function useRelativeMouse(ref: RefObject<HTMLElement>, settings = { persist: false } as Settings) {
    const initial = useRef<Position>({ position: { x: 0, y: 0 }, normal: { rx: 0, ry: 0 } });
    const [mouse, setMouse] = useState(initial.current);

    const updateMousePosition = useCallback(
        (event: MouseEvent) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setMouse({
                    position: {
                        x: event.clientX - rect.left,
                        y: event.clientY - rect.top,
                    },
                    normal: {
                        rx: ((event.clientX - rect.left) / rect.width) * 2 - 1,
                        ry: ((event.clientY - rect.top) / rect.height) * 2 - 1,
                    },
                });
            }
        },
        [ref]
    );

    // calculate center of div and set it as initial position
    useEffect(() => {
        if (ref.current) {
            const { width, height } = ref.current.getBoundingClientRect();
            initial.current = { position: { x: width / 2, y: height / 2 }, normal: { rx: 0, ry: 0 } };
        }
    });

    useEffect(() => {
        /*
        function to do mouse tracking when on move over the element
        this would be the ref of the container

        setting persist will not reset the mouse position when the mouse leaves the container
        */

        const handleMouseEnter = () => {
            window.addEventListener("mousemove", updateMousePosition);
        };

        const handleMouseLeave = () => {
            window.removeEventListener("mousemove", updateMousePosition);
            if (!settings.persist) {
                setMouse(initial.current);
            }
        };

        const element = ref.current;

        /*
        this will enable mouse tracking if the mouse is hover over the element and disable when mouse leaves
        */

        if (element) {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            }
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [ref, settings.persist, updateMousePosition]);

    return mouse;
}

export default useRelativeMouse;
