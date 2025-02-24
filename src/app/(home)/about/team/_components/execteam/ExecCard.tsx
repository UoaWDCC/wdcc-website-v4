import type { Exec } from "@/types/models";

import placeholder from "@/assets/image/200x200.png";
import ImageFit from "@/components/ImageFit";

import ExecCardText from "./ExecCardText";

interface ExecCardProps {
    exec: Exec;
}

export default function ExecCard({ exec }: ExecCardProps) {
    return (
        <div className="flex w-full flex-col items-center gap-2 overflow-hidden rounded-2xl bg-gray-50 sm:flex-row lg:w-[432px]">
            <ImageFit
                src={exec.image ? exec.image : placeholder}
                alt={exec.name}
                className="h-auto max-w-[200px] sm:max-w-[165px]"
                width="200px"
                height="200px"
            />
            <div className="flex max-w-[200px] flex-col items-center gap-[10px] px-4 py-4 text-center sm:max-w-[267px] sm:items-start sm:px-4 sm:py-2 sm:text-left">
                <ExecCardText name={exec.name} role={exec.role} description={exec.description} joined={exec.joined} />
            </div>
        </div>
    );
}
