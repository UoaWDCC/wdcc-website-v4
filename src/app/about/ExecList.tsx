import Image from "next/image";
import placeholder from "@public/200x200.png";

import { Exec } from "@/types/models";

interface ExecListProps {
    execs: Exec[];
}

export default function ExecList({ execs }: ExecListProps) {
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {execs.map((exec) => (
                    <div key={exec.name} className="flex flex-1 items-center justify-center">
                        <Image src={placeholder} alt={exec.name} width={200} height={200} className="h-auto w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}
