import { ExecPage } from "@/types/pages/ExecPage";
import { getAllExecTeamYears } from "@/payload/collections/executives/getAllExecTeamYears";
import { getExecTeamBySlug } from "@/payload/collections/executives/getExecYear";
import { parseExecTeam } from "@/payload/collections/executives/parseExecTeam";
import { CmsFetchError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";
import { parseExecPage } from "./parseExecPage";

export async function getExecPage(yearSlug?: string): Promise<ExecPage> {
    const payload = await getPayload();

    const execPage = await payload.findGlobal({
        slug: "execs-page",
    });
    if (!execPage) {
        throw new CmsFetchError("Failed to fetch Exec Page data from Payload CMS.");
    }

    const pageMeta = parseExecPage(execPage);
    const availableYears = await getAllExecTeamYears();
    const selectedSlug = yearSlug ?? availableYears[0]?.slug;
    if (!selectedSlug) {
        throw new CmsFetchError("No exec teams found in Payload CMS.");
    }
    const execTeam = await getExecTeamBySlug(selectedSlug);
    const teams = parseExecTeam(execTeam);

    return {
        title: pageMeta.title,
        info: pageMeta.info,
        availableYears,
        teams,
    };
}
