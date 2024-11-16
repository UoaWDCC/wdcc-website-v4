"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
    const [state, setstate] = useState(1);
    const handleSet = (value: number) => {
        setstate(value);
    };
    return (
        <div className="flex gap-8">
            <Button label="asd" value={1} current={state} handle={handleSet} />
            <Button label="sdf" value={2} current={state} handle={handleSet} />
            <Button label="dfg" value={3} current={state} handle={handleSet} />
        </div>
    );
};

const Button = ({
    label,
    value,
    current,
    handle,
}: {
    label: string;
    value: number;
    current: number;
    handle: (value: number) => void;
}) => {
    return (
        <motion.div className="relative" key={label} onClick={() => handle(value)}>
            {value === current && (
                <motion.div
                    className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-full bg-black"
                    layoutId="underline"
                />
            )}
            <p>{label}</p>
        </motion.div>
    );
};

export default Test;
