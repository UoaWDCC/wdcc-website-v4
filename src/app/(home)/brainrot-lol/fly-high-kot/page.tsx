"use client";

import { Canvas } from "@react-three/fiber";
import { Fire } from "./Fire";
import Image from "next/image";

export default function Page() {
  return (
    <>
    {/* im bored at uni */}
      <div className="bg-black h-dvh w-dvw p-16 flex justify-center items-center flex-col">
        <h1 className="text-white text-3xl font-semibold">Tech-edu car</h1>
        <h3 className="text-white text-xl">fly high kot 🕊 🕊</h3>
        <div
          style={{
            width: 320,
            height: 320,
            position: "absolute",
            zIndex: 999,
          }}>
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Fire />
          </Canvas>
        </div>
        <Image src={"/brainrot/techedu-retreat.png"} alt="Fly high kot" width={200} height={150} />
      </div>
    </>
  );
}

