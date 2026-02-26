"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/primitives/Button";
import type { ExecPage } from "@/types/pages/ExecPage";
import { getExecPage } from "@/payload/globals/execspage/getExecPage";
import ExecTeam from "./ExecTeam";

type ExecYearOption = {
    slug: string;
    label: string;
};

type ExecYearSwitcherProps = {
    years: ExecYearOption[];
    initialTeams: ExecPage["teams"];
    initialYearSlug: string;
};

export default function ExecYearSwitcher({ years, initialTeams, initialYearSlug }: ExecYearSwitcherProps) {
    const [teams, setTeams] = useState(initialTeams);
    const [activeSlug, setActiveSlug] = useState(initialYearSlug);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const loadYear = async (slug: string) => {
        setError(null);
        const result = await getExecPage(slug);
        setTeams(result.data.teams);
        setActiveSlug(result.yearSlug);
    };

    const handleSelect = (slug: string) => {
        if (slug === activeSlug) {
            return;
        }

        startTransition(() => {
            void loadYear(slug).catch(() => {
                setError("Failed to load that year. Please try again.");
            });
        });
    };

    return (
        <div className="flex w-full flex-col gap-10">
            <div className="flex flex-wrap justify-center gap-3">
                {years.length === 0 ? (
                    <p className="text-sm text-gray-500">No exec years configured yet.</p>
                ) : (
                    years.map((year) => (
                        <Button
                            key={year.slug}
                            type="button"
                            variant={{
                                style: year.slug === activeSlug ? "primary" : "tertiary",
                                color: "blue",
                            }}
                            className="min-w-[88px]"
                            onClick={() => handleSelect(year.slug)}
                            disabled={isPending}
                        >
                            {year.label}
                        </Button>
                    ))
                )}
            </div>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            {isPending ? <p className="text-sm text-gray-500">Loading year...</p> : null}
            {teams.length === 0 ? (
                <p className="text-sm text-gray-500">No teams available for this year.</p>
            ) : (
                teams.map((team, index) => (
                    <ExecTeam title={team.title} key={index} description={team.description} execs={team.execs ?? []} />
                ))
            )}
        </div>
    );
}
