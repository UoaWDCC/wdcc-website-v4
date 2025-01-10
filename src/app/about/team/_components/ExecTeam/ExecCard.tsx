import Image from "next/image";

import type { Exec } from "@/types/models";

import placeholder from "@/assets/image/200x200.png";

import ExecCardText from "./ExecCardText";

interface ExecCardProps {
    exec: Exec;
}

export default function ExecCard({ exec }: ExecCardProps) {
    return (
        <div className="flex w-[432px] items-center justify-start overflow-hidden rounded-2xl bg-gray-50">
            <Image src={exec.image ? exec.image : placeholder} alt={exec.name} className="h-auto max-w-[165px]" />
            <div className="flex max-w-[267px] flex-col gap-1 px-4 py-2">
                <ExecCardText name={exec.name} role={exec.role} description={exec.description} joined={exec.joined} />
            </div>
        </div>
    );
}
