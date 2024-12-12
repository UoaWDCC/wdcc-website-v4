import { Exec } from "@/types/models";

interface ExecListProps {
    execs: Exec[];
}

export default function ExecList({ execs }: ExecListProps) {
    return (
        <div>
            <h2 className="text-2xl font-semibold dark:text-white">Meet the Execs</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {execs.map((exec) => (
                    <div key={exec.name} className="mb-4 rounded-sm bg-blue-200 p-4 shadow-md">
                        <h3 className="text-lg font-semibold dark:text-white">{exec.name}</h3>
                        <p className="dark:text-white">{exec.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
