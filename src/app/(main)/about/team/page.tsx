import { redirect } from "next/navigation";
import { parseExecPage } from "@/payload/globals/execspage/parseExecPage";
import { getPayload } from "@/utils/payload";

export default async function TeamPage() {
    const payload = await getPayload();
    const execPage = await payload.findGlobal({ slug: "execs-page" });
    const { defaultYearSlug } = parseExecPage(execPage);

    redirect(`/about/team/${defaultYearSlug}`);
}
