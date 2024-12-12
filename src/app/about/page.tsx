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
                    imgSrc={clubAbout.image}
                    imgAlt={clubAbout.imageAlt}
                />
                <Duo title={whyJoin.title} content={whyJoin.content} imgFirst />
                <ExecList execs={execsJson} />
            </div>
        </StandardPageLayout>
    );
}
