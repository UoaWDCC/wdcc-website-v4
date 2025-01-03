import Header from "@/components/layout/Headers/Header";
import StandardPageLayout from "@/components/StandardPageLayout";

import ExecList from "./_components/ExecList";
import { execsData } from "./_data/execs.data";

export default function TeamPage() {
    return (
        <StandardPageLayout>
            <Header
                variant="secondary"
                color="blue"
                title="meet the team"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <ExecList execs={execsData} />
        </StandardPageLayout>
    );
}
