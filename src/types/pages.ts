import { Exec } from "./models";

export type ExecPage = {
    info: string;
    teams: {
        title: string;
        description: string;
        execs: Exec[];
    }[];
};
