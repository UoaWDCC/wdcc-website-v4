import { eduExecs } from "./eduExecs.data";
import { techExecs } from "./techExecs.data";

export const teamData = {
    info: `The WDCC Executive consists of 973 members and is split into a few key role divisions, which are outlined below.`,
    teams: [
        {
            title: "Tech",
            description: `The Tech team is responsible for managing all of WDCC’s deployments, project technologies, and internal tools - including  this very website!`,
            execs: techExecs,
        },
        {
            title: "Education",
            description: `The Education team helps craft workshops and training events to upskill all of WDCC’s members (and non-members too!)`,
            execs: eduExecs,
        },
    ],
};
