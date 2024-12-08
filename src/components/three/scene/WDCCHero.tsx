"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion-3d";

import useRelativeMouse from "@/hooks/useRelativeMouse";
import { WDCCThreeLogo } from "../primitives";
import Simple from "../Simple";
import { Common } from "../View";

const WDCCHero = () => {
    const container = useRef(null);
    const mouse = useRelativeMouse(container, { persist: true });

    return (
        <div className="relative h-[300px] w-full" ref={container}>
            <Simple>
                <Common />
                <motion.group
                    animate={{ rotateX: (Math.PI / 6) * mouse.normal.ry, rotateY: (Math.PI / 6) * mouse.normal.rx }}
                    transition={{ type: "smooth", duration: 0 }}
                >
                    <WDCCThreeLogo />
                </motion.group>
            </Simple>
        </div>
    );
};

export default WDCCHero;
