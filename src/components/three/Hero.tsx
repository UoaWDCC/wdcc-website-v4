"use client";

import React from "react";
import { motion } from "framer-motion-3d";

import Simple from "./Simple";
import { Common } from "./View";
import { WDCC } from "./WDCCThreeLogo";

const Hero = () => {
    return (
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
    );
};

export default Hero;
