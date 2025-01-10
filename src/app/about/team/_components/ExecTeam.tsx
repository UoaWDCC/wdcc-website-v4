import type { Exec } from "@/types/models";

import ExecCard from "./ExecTeam/ExecCard";

interface ExecTeamProps {
    title: string;
    description: string;
    execs: Exec[];
}

export default function ExecTeam({ title, description, execs }: ExecTeamProps) {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="ml-auto w-[50%] text-right text-sm">{description}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {execs.map((exec) => (
                    <ExecCard key={exec.name} exec={exec} />
                ))}
            </div>
        </div>
    );
}
