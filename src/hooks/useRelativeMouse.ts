import { useCallback, useEffect, useRef, useState } from "react";

type Position = {
    position: { x: number; y: number };
    normal: { rx: number; ry: number };
};

type Settings = {
    persist?: boolean;
};

function useRelativeMouse(ref: React.RefObject<HTMLElement>, settings = { persist: false } as Settings) {
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

    useEffect(() => {
        if (ref.current) {
            const { width, height } = ref.current.getBoundingClientRect();
            initial.current = { position: { x: width / 2, y: height / 2 }, normal: { rx: 0, ry: 0 } };
        }
    });

    useEffect(() => {
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
