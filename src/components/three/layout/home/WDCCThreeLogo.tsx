"use client";

import React, { RefObject, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useGUI } from "@/hooks/useGUI";

import { CommonLight } from "../../CommonLight";
import { WDCCThreeLogo } from "../../primitives";

let CONSTAINT = 0.5; // 90deg * CONSTRIANT
let smoothing = 0.03; // the lower the slower

const WDCCThreeHero = ({ parentRef }: { parentRef: RefObject<HTMLDivElement> }) => {
    const group = useRef<THREE.Group>(null!);
    const pointer = useRef(new THREE.Vector2());

    useGUI((gui) => {
        const folder = gui.addFolder("WDCCThreeHero");
        const params = {
            rotationContraint: CONSTAINT,
            smoothing: smoothing,
            x: group.current.position.x,
            y: group.current.position.y,
            z: group.current.position.z,
        };

        folder.add(params, "rotationContraint", 0, 1).onChange((c) => {
            CONSTAINT = c;
        });
        folder.add(params, "smoothing", 0, 1).onChange((c) => {
            smoothing = c;
        });
        folder.add(params, "x", -3, 3).onChange((c) => {
            group.current.position.x = c;
        });
        folder.add(params, "y", -3, 3).onChange((c) => {
            group.current.position.y = c;
        });
        folder.add(params, "z", -3, 3).onChange((c) => {
            group.current.position.z = c;
        });
        return () => {
            folder.reset();
        };
    });

    useEffect(() => {
        if (!parentRef?.current) return;

        const handlePointerMove = (event: MouseEvent) => {
            if (!parentRef?.current) return;
            const rect = parentRef.current.getBoundingClientRect();

            pointer.current.x = -((event.pageY - rect.top) / window.innerHeight) * (2 * CONSTAINT) + 1 * CONSTAINT; // Target rotation on X
            pointer.current.y = (event.pageX / window.innerWidth) * (2 * CONSTAINT) - 1 * CONSTAINT; // Target rotation on Y
        };

        const handleMouseEnter = () => {
            window.addEventListener("pointermove", handlePointerMove);
        };
        const handleMouseLeave = () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };

        handleMouseEnter();

        parentRef.current.addEventListener("mouseenter", handleMouseEnter);
        parentRef.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (!parentRef.current) return;
            parentRef.current.removeEventListener("mouseenter", handleMouseEnter);
            parentRef.current.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [parentRef]);

    useFrame(() => {
        if (!group?.current) return;

        // Smoothly interpolate the current rotation towards the target rotation
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.current.x, smoothing);
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.current.y, smoothing);
    });

    return (
        <>
            <group ref={group}>
                <WDCCThreeLogo />
            </group>
            <CommonLight />
        </>
    );
};

WDCCThreeHero.displayName = "WDCCThreeHero";

export default WDCCThreeHero;
