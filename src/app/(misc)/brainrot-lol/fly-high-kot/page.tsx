"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Fire } from "./Fire";
import car from "./_assets/techedu-retreat.png";

export default function Page() {
    return (
        <>
            {/* im bored at uni */}
            <div className="flex h-dvh w-dvw flex-col items-center justify-center bg-black p-16">
                <h1 className="text-3xl font-semibold text-white">Tech-edu car</h1>
                <h3 className="text-xl text-white">fly high kot 🕊 🕊</h3>
                <div
                    style={{
                        width: 320,
                        height: 320,
                        position: "absolute",
                        zIndex: 999,
                    }}
                >
                    <Canvas camera={{ position: [0, 0, 1] }}>
                        <Fire />
                    </Canvas>
                </div>
                <Image src={car} alt="Fly high kot" width={200} height={150} />
            </div>
        </>
    );
}
