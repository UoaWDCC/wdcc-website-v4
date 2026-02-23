"use client";

import { useEffect, useMemo, useState } from "react";
import { Exec } from "@/types/models/Exec";
import { EmptyListPlaceholder } from "@/components/misc/EmptyListPlaceholder";
import ExecTeam from "./ExecTeam";

type TeamYearData = {
    year: string;
    teams: {
        title: string;
        description: string;
        execs: Exec[];
    }[];
};

type TeamYearSwitcherProps = {
    data: TeamYearData[];
};

export default function TeamYearSwitcher({ data }: TeamYearSwitcherProps) {
    const years = useMemo(
        () =>
            [...new Set(data.map((entry) => entry.year))].sort((a, b) => {
                const aNum = Number(a);
                const bNum = Number(b);
                if (Number.isNaN(aNum) || Number.isNaN(bNum)) return b.localeCompare(a);
                return bNum - aNum;
            }),
        [data],
    );

    const defaultYear = years[0] ?? "";
    const [selectedYear, setSelectedYear] = useState(defaultYear);

    useEffect(() => {
        setSelectedYear(defaultYear);
    }, [defaultYear]);

    const selected = data.find((entry) => entry.year === selectedYear);

    const onSelectYear = (year: string) => () => setSelectedYear(year);

    return (
        <div className="flex w-full flex-col gap-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
                <p className="text-sm font-semibold tracking-wide uppercase">Year</p>
                {years.map((year) => (
                    <button
                        key={year}
                        type="button"
                        onClick={onSelectYear(year)}
                        className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                            selectedYear === year
                                ? "border-blue-500 bg-blue-500 text-white"
                                : "border-gray-300 text-gray-700 hover:border-gray-500"
                        }`}
                    >
                        {year}
                    </button>
                ))}
            </div>

            {selected?.teams.length ? (
                selected.teams.map((team, index) => (
                    <ExecTeam title={team.title} key={index} description={team.description} execs={team.execs ?? []} />
                ))
            ) : (
                <EmptyListPlaceholder>{`No team data for ${selectedYear}`}</EmptyListPlaceholder>
            )}
        </div>
    );
}
