import { ExecutiveTeam } from "@/types/models/ExecutiveTeam";
import ExecTeam from "./ExecTeam";
import { ExecYearTag } from "./ExecYearTag";

type ExecTeamsSectionProps = {
    selectedYear: string;
    availableYears: string[];
    teams: ExecutiveTeam[];
};

export default function ExecTeamsSection({ selectedYear, availableYears, teams }: ExecTeamsSectionProps) {
    return (
        <>
            <div className="flex items-center justify-center gap-4">
                <p className="text-md font-semibold">Year</p>
                <div className="flex gap-3">
                    {availableYears.map((year) => (
                        <ExecYearTag key={year} year={year} isSelected={selectedYear === year} />
                    ))}
                </div>
            </div>

            <div className="flex w-full flex-col gap-24">
                {teams.map((team, index) => (
                    <ExecTeam key={index} title={team.title} description={team.description} execs={team.execs ?? []} />
                ))}
            </div>
        </>
    );
}
