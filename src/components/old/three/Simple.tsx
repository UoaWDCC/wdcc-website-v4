"use client";

import { ReactNode } from "react";
import { CommonLight } from "./CommonLight";
import { Three } from "./scene/Three";

type SimpleProps = {
    children: ReactNode;
};

/* simple 3d scene setup */
const Simple = ({ children }: SimpleProps) => {
    return (
        <Three>
            <CommonLight />
            {children}
        </Three>
    );
};

export default Simple;
