import NavigationBar from "@/components/NavigationBar";

// import StandardPageLayout from "@/components/StandardPageLayout";

import AboutPageBody from "./_components/AboutPageBody";
import AboutPageHeader from "./_components/AboutPageHeader";
import ButtonRow from "./_components/ButtonRow";
import Duo from "./_components/Duo";
import ExecList from "./_components/ExecList";
import { aboutData } from "./_data/about.data";
import { execsData } from "./_data/execs.data";

export default function AboutPage() {
    const header = aboutData.header;
    const genInfo = aboutData.genInfo;
    const whyJoin = aboutData.whyJoin;
    const clubStory = aboutData.clubStory;
    const ourPeople = aboutData.ourPeople;

    return (
        // <StandardPageLayout></StandarPageLayout>
        <>
            <NavigationBar className="py-4" />
            <AboutPageHeader
                className="flex flex-col gap-8 bg-blue-400 px-48 py-20"
                title={header.title}
                content={header.content}
            >
                <ButtonRow className="" />
            </AboutPageHeader>
            <AboutPageBody className="flex flex-col gap-24 px-48 py-20">
                <Duo imgSrc={genInfo.image} imgAlt={genInfo.imageAlt}>
                    <p className="font-medium whitespace-pre-line">{genInfo.firstPart}</p>
                    <p className="font-medium whitespace-pre-line">{genInfo.secondPart}</p>
                </Duo>
                <Duo imgSrc={whyJoin.image} imgAlt={whyJoin.imageAlt} imgFirst>
                    <h3 className="font-semibold">{whyJoin.title}</h3>
                    <p className="font-medium whitespace-pre-line">{whyJoin.content}</p>
                </Duo>
                <Duo imgSrc={clubStory.image} imgAlt={clubStory.imageAlt}>
                    <h3 className="font-semibold">{clubStory.title}</h3>
                    <p className="font-medium whitespace-pre-line">{clubStory.content}</p>
                </Duo>
                <Duo imgSrc={ourPeople.image} imgAlt={ourPeople.imageAlt} imgFirst>
                    <h3 className="font-semibold">{ourPeople.title}</h3>
                    <p className="font-medium whitespace-pre-line">{ourPeople.content}</p>
                </Duo>
                <h2 className="text-2xl font-semibold">Meet the Execs</h2>
                <ExecList execs={execsData} />
            </AboutPageBody>
        </>
    );
}
