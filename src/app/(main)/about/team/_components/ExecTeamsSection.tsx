import { Exec } from "@/types/models/Exec";
import ExecTeam from "./ExecTeam";
import { ExecYearTag } from "./ExecYearTag";

type Team = {
    title: string;
    description: string;
    execs: Exec[];
};

type ExecTeamsSectionProps = {
    selectedYearSlug: string;
    availableYears: { year: string; slug: string }[];
    teams: Team[];
};

export default function ExecTeamsSection({ selectedYearSlug, availableYears, teams }: ExecTeamsSectionProps) {
    return (
        <>
            <div className="flex items-center justify-center gap-4">
                <p className="text-md font-semibold">Year</p>
                <div className="flex gap-3">
                    {availableYears.map((entry) => (
                        <ExecYearTag
                            key={entry.slug}
                            year={entry.year}
                            slug={entry.slug}
                            isSelected={selectedYearSlug === entry.slug}
                        />
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
