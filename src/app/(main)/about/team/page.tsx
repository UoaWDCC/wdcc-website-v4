import { redirect } from "next/navigation";
import { getAllExecTeamYears } from "@/payload/collections/executives/getAllExecTeamYears";

export default async function TeamPage() {
    const years = await getAllExecTeamYears();
    const latestYear = years[0];

    redirect(`/about/team/${latestYear}`);
}
