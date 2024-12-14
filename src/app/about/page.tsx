import StandardPageLayout from "@/components/common/StandardPageLayout";



import AboutPageHeading from "./_components/AboutPageHeading";
import Duo from "./_components/Duo";
import ExecList from "./_components/ExecList";
import { aboutData } from "./_data/about.data";
import { execsData } from "./_data/execs.data";


export default function AboutPage() {
    const clubAbout = aboutData.clubAbout;
    const whyJoin = aboutData.whyJoin;

    return (
        <StandardPageLayout>
            <div className="flex flex-col gap-10 p-10 sm:px-12">
                <AboutPageHeading title="About Us" />
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
                <ExecList execs={execsData} />
            </div>
        </StandardPageLayout>
    );
}