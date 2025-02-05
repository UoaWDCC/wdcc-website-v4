"use client";

import React, { RefObject, useEffect, useRef } from "react";
import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useGUI } from "@/hooks/useGUI";

import { WDCCThreeLogo } from "../../primitives";
import HeroImages from "./HeroImages";

let CONSTAINT = 0.5; // 90deg * CONSTRIANT
let smoothing = 0.03; // the lower the slower

const WDCCThreeHero = ({ parentRef }: { parentRef: RefObject<HTMLDivElement> }) => {
    const group = useRef<THREE.Group>(null!);
    const pointer = useRef(new THREE.Vector2());
    const axesHelper = useRef<THREE.AxesHelper>(null!);

    useGUI((gui) => {
        const folder = gui.addFolder("WDCCThreeHero");
        const params = {
            rotationContraint: CONSTAINT,
            smoothing: smoothing,
            x: group.current.position.x,
            y: group.current.position.y,
            z: group.current.position.z,
            axisHerlper: axesHelper.current.visible,
        };

        folder.add(params, "rotationContraint", 0, 1).onChange((c) => {
            CONSTAINT = c;
        });
        folder.add(params, "smoothing", 0, 1).onChange((c) => {
            smoothing = c;
        });
        if (group?.current) {
            folder.add(params, "x", -3, 3).onChange((c) => {
                group.current.position.x = c;
            });
            folder.add(params, "y", -3, 3).onChange((c) => {
                group.current.position.y = c;
            });
            folder.add(params, "z", -3, 3).onChange((c) => {
                group.current.position.z = c;
            });
        }
        if (axesHelper?.current) {
            folder.add(params, "axisHerlper").onChange((c) => {
                axesHelper.current.visible = c;
            });
        }
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
            <Float rotationIntensity={1} floatIntensity={0.25} speed={2}>
                <group ref={group} position={[0, 0.5, 0]}>
                    <WDCCThreeLogo />
                </group>
                <HeroImages />
            </Float>
            <axesHelper ref={axesHelper} visible={false} />
        </>
    );
};

WDCCThreeHero.displayName = "WDCCThreeHero";

export default WDCCThreeHero;
