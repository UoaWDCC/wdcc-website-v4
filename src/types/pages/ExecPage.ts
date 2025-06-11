import { Exec } from "../models/Exec";

export type ExecPage = {
    info: string;
    teams: {
        title: string;
        description: string;
        execs: Exec[];
    }[];
};
