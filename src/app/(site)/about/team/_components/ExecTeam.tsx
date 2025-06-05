import { Exec } from "@/types/models";

import ExecCard from "./execteam/ExecCard";

type ExecTeamProps = {
    title: string;
    description: string;
    execs: Exec[];
}

export default function ExecTeam({ title, description, execs }: ExecTeamProps) {
    return (
        <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center">
                <h2 className="text-center text-3xl font-bold sm:text-left">{title}</h2>
                <p className="text-center leading-tight font-normal sm:ml-auto sm:w-[50%] sm:text-right">
                    {description}
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {(execs ?? []).map((exec) => (
                    <ExecCard key={exec.name} exec={exec} />
                ))}
            </div>
        </div>
    );
}
