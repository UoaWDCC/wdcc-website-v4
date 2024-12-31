"use client";

import React, { useRef } from "react";
import { useFrame, Vector3 } from "@react-three/fiber";
import { DoubleSide, Group, Mesh } from "three";

import { CommonLight } from "../../../components/three/CommonLight";
import { TrianglePlane } from "../../../components/three/primitives/TrianglePlane";

// instance settings
const RADIUS = 32;
const COUNT = 64;
const RAD_INCREMENT = (Math.PI * 2) / COUNT;

// movement settings
const SPEED = Math.PI / 16; // ref: pi*2 is one full rotation per second
const ROTCHAOS = 2;
const POSCHAOS = 8;

const TRIANGLEOBJ = ({ position, faceRotation }: { position: Vector3; faceRotation: number }) => {
    const meshRef = useRef<Mesh>(null!);
    // if this forced re-render isn't here the background straight up doesn't load for some reason :skull:,
    // i've tried everything else
    const [, setReady] = React.useState(false);

    React.useEffect(() => {
        setReady(true); // Trigger re-render
    }, []);

    const roty = SPEED + Math.random() * ROTCHAOS;
    const rotz = SPEED + Math.random() * ROTCHAOS;

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef!.current!.rotateY(roty * delta);
            meshRef!.current!.rotateZ(rotz * delta);
        }
    });

    return (
        <group
            position={position}
            rotation={[0, faceRotation, 0]}
            // initial={{ rotateZ: 0 }}
            // animate={{ rotateZ: Math.PI * 2 }}
            // transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
            <mesh ref={meshRef}>
                <TrianglePlane />
                <meshBasicMaterial color="hsl(217, 100%, 61%)" side={DoubleSide} />
            </mesh>
        </group>
    );
};

const TRIANGLES = [...Array(COUNT)].map((_, i) => {
    const x = Math.cos(RAD_INCREMENT * i) * RADIUS + (Math.random() - 0.5) * POSCHAOS;
    const z = Math.sin(RAD_INCREMENT * i) * RADIUS;
    const y = (Math.random() - 0.5) * POSCHAOS;

    const position = [x, y, z] as Vector3;
    const faceRotation = -i * RAD_INCREMENT - Math.PI / 2;
    // console.log(position);
    return <TRIANGLEOBJ key={i} position={position} faceRotation={faceRotation} />;
});

const BackgroundEffect = () => {
    const ref = useRef<Group>(null);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.02;
        }
    });

    return (
        <>
            <group ref={ref}>{TRIANGLES}</group>
            <CommonLight />
        </>
    );
};

export default BackgroundEffect;
