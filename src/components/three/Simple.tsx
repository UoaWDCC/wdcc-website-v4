"use client";

import React from "react";

import { CommonLight } from "./CommonLight";
import { Three } from "./scene/Three";

/* simple 3d scene setup */
const Simple = ({ children }: { children: React.ReactNode }) => {
    return (
        <Three>
            <CommonLight />
            {children}
        </Three>
    );
};

export default Simple;
