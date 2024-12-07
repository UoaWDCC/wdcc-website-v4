"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion-3d";

import useRelativeMouse from "@/hooks/useMousePos";
import Simple from "./Simple";
import { Common } from "./View";
import { WDCC } from "./WDCCThreeLogo";

const WDCCHero = () => {
    const container = useRef(null);
    const mouse = useRelativeMouse(container);
    console.log(mouse);

    return (
        <div className="relative size-80 border" ref={container}>
            <div className="absolute size-2 bg-black" style={{ top: mouse.y, left: mouse.x }} />
            <Simple>
                <Common />
                <motion.group
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: Math.PI * 2 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <WDCC />
                </motion.group>
            </Simple>
        </div>
    );
};

export default WDCCHero;
