import { ExecutiveTeam } from "../models/ExecutiveTeam";

export type ExecPage = {
    title: string;
    info: string;
    availableYears: string[];
    teams: ExecutiveTeam[];
};
