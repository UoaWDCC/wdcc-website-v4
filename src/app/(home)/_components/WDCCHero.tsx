"use client";

import React, { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion-3d";

import Draw from "@/app/_component/Draw";
import { Button } from "@/components/primitives/Button";
import useRelativeMouse from "@/hooks/useRelativeMouse";

const WDCCThreeLogo = dynamic(() => import("@/components/three/primitives/index").then((mod) => mod.WDCCThreeLogo), {
    ssr: false,
});
const View = dynamic(() => import("@/components/three/scene/View").then((mod) => mod.View), {
    ssr: false,
});
const Common = dynamic(() => import("@/components/three/CommonLight").then((mod) => mod.CommonLight), { ssr: false });

const WDCCHero = () => {
    const container = useRef(null);
    const mouse = useRelativeMouse(container, { persist: true });

    const [, setReady] = React.useState(false);

    React.useEffect(() => {
        setReady(true); // force trigger re-render for mouse hook to work
    }, []);

    return (
        <div className="relative flex h-dvh w-full flex-col items-center justify-center" ref={container}>
            <div className="flex w-[clamp(300px,100%,1100px)] flex-col items-center self-center px-8 text-center text-md">
                <h3 className="font-normal tracking-[25%] text-blue-800">WEB DEVELOPMENT AND CONSULTING CLUB</h3>
                <h1 className="text-5xl font-bold italic text-blue-brand">
                    Aotearoa’s largest student technology society.
                </h1>
                <p className="mt-8 text-lg text-blue-700">
                    We connect tomorrow’s developers, designers, and tech project leaders with the real-world experience
                    and opportunities that{" "}
                    <span className="relative italic underline">
                        <Draw />
                        help them shine
                    </span>
                    .
                </p>
                <div className="mt-8">
                    <Button variant={{ style: "primary", color: "blue" }}>Become a member for 2025</Button>
                </div>
            </div>
            <View className="flex h-[500px] w-[800px] flex-col items-center justify-center">
                <Suspense fallback={null}>
                    {/* rotate the logo relative to the mouse, range from -60deg to 60deg on x and y axis*/}
                    <motion.group
                        animate={{
                            rotateX: (Math.PI / 6) * mouse.normal.ry - 0.15,
                            rotateY: (Math.PI / 6) * mouse.normal.rx - 0.15,
                        }}
                        transition={{ type: "smooth", duration: 0.2 }}
                    >
                        <WDCCThreeLogo />
                    </motion.group>
                    <Common />
                </Suspense>
            </View>
        </div>
    );
};

export default WDCCHero;
