import StandardPageLayout from "@/components/common/StandardPageLayout";

import aboutJson from "./about.json";
import Duo from "./Duo";
import ExecList from "./ExecList";
import execsJson from "./execs.json";
import Heading from "./Heading";

export default function AboutPage() {
    const clubAbout = aboutJson.clubAbout;
    const whyJoin = aboutJson.whyJoin;

    return (
        <StandardPageLayout>
            <div className="flex flex-col gap-10 px-10 sm:px-12">
                <Heading title="About Us" />
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
