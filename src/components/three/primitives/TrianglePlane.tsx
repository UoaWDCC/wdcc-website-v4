"use client";

import { useRef } from "react";

import { BufferAttribute, BufferGeometry } from "three";

// Define the vertices of the triangle
// vertices are offset an amount to make an equilateral triangle and center it
// prettier-ignore
const vertices = new Float32Array([
     0,   (Math.sqrt(3)/2) * ( 2 / 3), 0, // Top vertex
    -0.5, (Math.sqrt(3)/2) * (-1 / 3), 0, // Bottom-left vertex
     0.5, (Math.sqrt(3)/2) * (-1 / 3), 0, // Bottom-right vertex
]);

export const TrianglePlane = () => {
    const geometry = useRef<BufferGeometry>(null);

    // Create the geometry and set the vertices
    if (geometry.current) {
        geometry.current.setAttribute("position", new BufferAttribute(vertices, 3));
    }

    return <bufferGeometry ref={geometry} />;
};
