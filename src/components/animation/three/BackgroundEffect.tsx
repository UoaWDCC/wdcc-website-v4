"use client";

import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Vector3, useFrame } from "@react-three/fiber";
import { Color } from "three";
import { DoubleSide, Euler, Group, Mesh } from "three";
import { TrianglePlane } from "./primitives/TrianglePlane";

// triangle instance settings
const RADIUS = 32;
const COUNT = 64;
const RAD_INCREMENT = (Math.PI * 2) / COUNT;

const initialiseTriangleObjectData = (i: number) => {
    // calculate initial values here
    const x = Math.cos(RAD_INCREMENT * i) * RADIUS + (Math.random() - 0.5) * POSCHAOS;
    const z = Math.sin(RAD_INCREMENT * i) * RADIUS;
    const y = (Math.random() - 0.5) * POSCHAOS;

    const initRotationX = 2 * Math.PI * Math.random();
    const initRotionY = 2 * Math.PI * Math.random();

    const position = [x, y, z] as Vector3;
    const rotation = new Euler(initRotationX, initRotionY, 0, "XYZ");
    const faceRotation = -i * RAD_INCREMENT - Math.PI / 2;

    return { position, rotation, faceRotation };
};

// individual movement settings
const SPEED = Math.PI / 16; // ref: pi*2 is one full rotation per second
const ROTCHAOS = 2;
const POSCHAOS = 8;

type TriangleObject = {
    position: Vector3;
    rotation: Euler;
    faceRotation: number;
    color: Color;
};

type updateHandler = { update: (delta: number) => void };

// per triangle instance
const TRIANGLEOBJ = forwardRef<updateHandler, TriangleObject>(({ position, rotation, faceRotation, color }, ref) => {
    const meshRef = useRef<Mesh>(null);
    // don't update on render
    const rotationDY = useRef(SPEED + Math.random() * ROTCHAOS).current;
    const rotationDX = useRef(SPEED + Math.random() * ROTCHAOS).current;

    // if this forced re-render isn't here the background straight up doesn't load for some reason :skull:,
    // i've tried everything else
    const [, setReady] = useState(false);

    useEffect(() => {
        setReady(true); // Trigger re-render
    }, []);

    const update = useCallback(
        (delta: number) => {
            if (meshRef.current) {
                meshRef.current.rotateY(rotationDY * delta);
                meshRef.current.rotateZ(rotationDX * delta);
            }
        },
        [rotationDY, rotationDX]
    );

    useImperativeHandle(ref, () => {
        return {
            update,
        };
    }, [update]);

    return (
        <group position={position} rotation={[0, faceRotation, 0]}>
            <mesh ref={meshRef} rotation={rotation}>
                <TrianglePlane />
                <meshBasicMaterial color={color} side={DoubleSide} />
            </mesh>
        </group>
    );
});

TRIANGLEOBJ.displayName = "TRIANGLEOBJ";

const TRIANGLES = ({ color }: { color: Color }) => {
    const meshRefs = useRef<updateHandler[]>([]);
    useFrame((_, delta) => {
        for (const mesh of meshRefs.current) {
            mesh.update(delta);
        }
    });

    return Array.from({ length: COUNT }).map((_, i) => {
        const triangleAttributes = initialiseTriangleObjectData(i);
        return (
            <TRIANGLEOBJ
                key={i}
                {...triangleAttributes}
                color={color}
                ref={(ref) => {
                    if (ref) meshRefs.current[i] = ref;
                }}
            />
        );
    });
};

const BackgroundEffect = () => {
    const color = useRef(new Color("hsl(217, 100%, 61%)"));
    const backgroundSpeed = useRef(0.02);

    const ref = useRef<Group>(null);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * backgroundSpeed.current;
        }
    });

    return (
        <>
            <group ref={ref}>
                <TRIANGLES color={color.current} />
            </group>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 8]} />
        </>
    );
};

export default BackgroundEffect;
