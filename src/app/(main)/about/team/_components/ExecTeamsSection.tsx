"use client";

import { useState, useTransition } from "react";
import { Exec } from "@/types/models/Exec";
import { getExecPage } from "@/payload/globals/execspage/getExecPage";
import ExecTeam from "./ExecTeam";
import { ExecYearTag } from "./ExecYearTag";

type Team = {
    title: string;
    description: string;
    execs: Exec[];
};

type ExecTeamsSectionProps = {
    defaultYearSlug: string;
    availableYears: { year: string; slug: string }[];
    initialTeams: Team[];
};

export default function ExecTeamsSection({ defaultYearSlug, availableYears, initialTeams }: ExecTeamsSectionProps) {
    const [selectedSlug, setSelectedSlug] = useState(defaultYearSlug);
    const [teams, setTeams] = useState(initialTeams);
    const [isPending, startTransition] = useTransition();

    const handleYearSelect = (slug: string) => () => {
        if (slug === selectedSlug) return;
        setSelectedSlug(slug);

        startTransition(async () => {
            const data = await getExecPage(slug);
            setTeams(data.teams);
        });
    };

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
                            onSelect={handleYearSelect}
                            isSelected={selectedSlug === entry.slug}
                        />
                    ))}
                </div>
            </div>

            <div className={`flex w-full flex-col gap-24 transition-opacity ${isPending ? "opacity-50" : ""}`}>
                {teams.map((team, index) => (
                    <ExecTeam key={index} title={team.title} description={team.description} execs={team.execs ?? []} />
                ))}
            </div>
        </>
    );
}
