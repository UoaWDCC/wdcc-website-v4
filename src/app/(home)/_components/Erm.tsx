"use client";

import React from "react";
import { motion } from "framer-motion";

const text =
    "We promote the learning and practice of software development through workshops and real-world projects, to equip and inspire tomorrow's talent";

const Erm = () => {
    // todo animate lol
    // const ref = useRef<HTMLDivElement>(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start end", "end start"],
    // });

    // scrollYProgress.on("change", (latest) => console.log(latest));

    return (
        <div className="grid h-[60vh] w-full place-items-center">
            <div className="flex items-center justify-center text-xl text-blue-700">
                <p className="w-[clamp(300px,100%,800px)] whitespace-pre-wrap text-center">
                    {text.split("").map((letter, idx) => (
                        <motion.span key={idx}>{letter}</motion.span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default Erm;
