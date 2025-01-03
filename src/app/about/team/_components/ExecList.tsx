import Image from "next/image";

import type { Exec } from "@/types/models";

import placeholder from "@/assets/image/200x200.png";

interface ExecListProps {
    execs: Exec[];
}

export default function ExecList({ execs }: ExecListProps) {
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {execs.map((exec) => (
                    <div key={exec.name} className="flex flex-1 items-center justify-center">
                        <Image
                            src={exec.image ? exec.image : placeholder}
                            alt={exec.name}
                            width={200}
                            height={200}
                            className="h-auto w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
