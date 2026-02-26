"use client";

import Image from "next/image";
import type { Exec } from "@/types/models/Exec";
import placeholder from "@/assets/image/200x200.png";
import ExecCardText from "./ExecCardText";

type ExecCardProps = {
    exec: Exec;
};

export default function ExecCard({ exec }: ExecCardProps) {
    return (
        <div className="flex w-full flex-col items-center overflow-hidden rounded-2xl bg-gray-50 sm:flex-row lg:w-[432px]">
            <div className="relative h-[200px] w-full sm:h-[200px] sm:w-[165px] sm:flex-shrink-0">
                <Image
                    priority
                    fill
                    sizes="200px"
                    src={exec.image ?? placeholder}
                    alt={exec.name}
                    className="object-cover"
                />
            </div>
            <div className="flex max-w-[200px] flex-col items-center gap-[10px] px-4 py-4 text-center sm:max-w-[267px] sm:items-start sm:px-8 sm:py-2 sm:text-left">
                <ExecCardText name={exec.name} role={exec.role} description={exec.description} joined={exec.joined} />
            </div>
        </div>
    );
}
