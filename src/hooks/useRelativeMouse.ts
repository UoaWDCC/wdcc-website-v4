import { useCallback, useEffect, useRef, useState } from "react";

type Position = { x: number; y: number };

function useRelativeMouse(ref: React.RefObject<HTMLElement>) {
    const initial = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState<Position>(initial.current);

    const updateMousePosition = useCallback(
        (event: MouseEvent) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setPosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                });
            }
        },
        [ref]
    );

    useEffect(() => {
        if (ref.current) {
            const { width, height } = ref.current.getBoundingClientRect();
            initial.current = { x: width / 2, y: height / 2 };
        }
    });

    useEffect(() => {
        const handleMouseEnter = () => {
            window.addEventListener("mousemove", updateMousePosition);
        };

        const handleMouseLeave = () => {
            window.removeEventListener("mousemove", updateMousePosition);
            setPosition(initial.current);
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
    }, [ref, updateMousePosition]);

    return position;
}

export default useRelativeMouse;
