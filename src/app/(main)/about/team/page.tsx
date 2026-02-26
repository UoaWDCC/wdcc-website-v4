import { redirect } from "next/navigation";
import { getAllExecTeamYears } from "@/payload/collections/executives/getAllExecTeamYears";

export default async function TeamPage() {
    const years = await getAllExecTeamYears();
    const latestSlug = years[0]?.slug;

    redirect(`/about/team/${latestSlug}`);
}
