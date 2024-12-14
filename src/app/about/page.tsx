import StandardPageLayout from "@/components/common/StandardPageLayout";

import aboutJson from "./about.json";
import Duo from "./Duo";
import ExecList from "./ExecList";
import execsJson from "./execs.json";
import PageHeading from "./PageHeading";

export default function AboutPage() {
    const clubAbout = aboutJson.clubAbout;
    const whyJoin = aboutJson.whyJoin;

    return (
        <StandardPageLayout>
            <div className="flex flex-col gap-10 p-10 sm:px-12">
                <PageHeading title="About Us" />
                <Duo
                    title={clubAbout.title}
                    content={clubAbout.content}
                    imgSrcPath={clubAbout.image}
                    imgAlt={clubAbout.imageAlt}
                />
                <Duo
                    title={whyJoin.title}
                    content={whyJoin.content}
                    imgSrcPath={whyJoin.image}
                    imgAlt={whyJoin.imageAlt}
                    imgFirst
                />
                <h2 className="text-2xl font-semibold">Meet the Execs</h2>
                <ExecList execs={execsJson} />
            </div>
        </StandardPageLayout>
    );
}
