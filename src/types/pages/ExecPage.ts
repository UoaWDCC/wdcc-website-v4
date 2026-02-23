import { Exec } from "../models/Exec";

export type ExecPage = {
    info: string;
    years: {
        year: string;
        teams: {
            title: string;
            description: string;
            execs: Exec[];
        }[];
    }[];
};
