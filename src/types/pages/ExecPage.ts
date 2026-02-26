import { Exec } from "../models/Exec";

export type ExecPage = {
    title: string;
    info: string;
    availableYears: { year: string; slug: string }[];
    teams: {
        title: string;
        description: string;
        execs: Exec[];
    }[];
};
