import NavigationBar from "@/components/NavigationBar";

// import StandardPageLayout from "@/components/StandardPageLayout";

import AboutPageBody from "./_components/AboutPageBody";
import AboutPageHeader from "./_components/AboutPageHeader";
import ButtonRow from "./_components/ButtonRow";
import Duo from "./_components/Duo";
import ExecList from "./_components/ExecList";
import { cardData } from "./_data/cards.data";
import { execsData } from "./_data/execs.data";

export default function AboutPage() {
    const headerContent = `The Web Development and Consulting Club is Aotearoa New Zealand’s largest student technology club. Read more about our history, goals, and achievements - as well as the people that help make it all happen.`;

    return (
        // <StandardPageLayout></StandarPageLayout>
        <>
            <NavigationBar className="py-4" />
            <AboutPageHeader
                className="flex flex-col gap-8 bg-blue-400 px-48 py-20"
                title="About Us"
                content={headerContent}
            >
                <ButtonRow className="" />
            </AboutPageHeader>
            <AboutPageBody className="flex flex-col gap-24 px-48 py-20">
                {cardData.map((data, index) => (
                    <Duo key={data.title} imgSrcPath={data.image} imgAlt={data.imageAlt} imgFirst={index % 2 === 1}>
                        <h3 className="font-semibold">{data.title}</h3>
                        <p className="font-medium whitespace-pre-line">{data.content}</p>
                    </Duo>
                ))}
                <h2 className="text-2xl font-semibold">Meet the Execs</h2>
                <ExecList execs={execsData} />
            </AboutPageBody>
        </>
    );
}
