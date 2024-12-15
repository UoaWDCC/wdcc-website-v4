import StandardPageLayout from "@/components/common/StandardPageLayout";

import AboutPageHeading from "./_components/AboutPageHeading";
import Duo from "./_components/Duo";
import ExecList from "./_components/ExecList";
import { aboutData } from "./_data/about.data";
import { execsData } from "./_data/execs.data";

export default function AboutPage() {
    return (
        <StandardPageLayout>
            <div className="flex flex-col gap-10 p-10 sm:px-12">
                <AboutPageHeading title="About Us" />
                {aboutData.map((data) => (
                    <Duo
                        key={data.title}
                        title={data.title}
                        content={data.content}
                        imgSrcPath={data.image}
                        imgAlt={data.imageAlt}
                    />
                ))}

                <h2 className="text-2xl font-semibold">Meet the Execs</h2>
                <ExecList execs={execsData} />
            </div>
        </StandardPageLayout>
    );
}
