"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/libs/utils";
import { ClassName } from "@/types/utils";
import { Button } from "../primitives/Button";

// ONLY USE CLASSNAME TO CHANGE MEDIA QUERY
const NavigationMenu = ({ className }: ClassName) => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <Button set={{ color: "icon" }} className={cn("", className)}>
                Menu
            </Button>
            <motion.div
                className={cn("absolute left-0 top-0 h-[200px] w-full bg-blue-900 px-10 pt-8 text-white", className)}
            >
                asd
            </motion.div>
        </>
    );
};

export default NavigationMenu;
