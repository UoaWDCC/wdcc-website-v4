import Header from "@/components/layout/Headers/Header";
import { Button } from "@/components/primitives/Button";
import StandardPageLayout from "@/components/StandardPageLayout";

import AboutPageBody from "./_components/AboutPageBody";
import Duo from "./_components/Duo";
import { aboutData } from "./_data/about.data";

export default function AboutPage() {
    const header = aboutData.header;
    const genInfo = aboutData.genInfo;
    const whyJoin = aboutData.whyJoin;
    const clubStory = aboutData.clubStory;
    const ourPeople = aboutData.ourPeople;

    return (
        <StandardPageLayout>
            <Header
                variant="primary"
                color="brand"
                title={header.title}
                description={header.content}
                primaryButton={{ label: "Meet the team ⮕", href: "/about/team" }}
                secondaryButton={{ label: "Frequently asked questions", href: "/faq" }}
            />
            <AboutPageBody
                outer="flex w-full items-center justify-center py-20"
                inner="flex w-[80%] max-w-[1100px] flex-col gap-24"
            >
                <Duo imgSrc={genInfo.image} imgAlt={genInfo.imageAlt}>
                    <p className="font-medium whitespace-pre-line">{genInfo.firstPart}</p>
                    <p className="font-medium whitespace-pre-line">{genInfo.secondPart}</p>
                </Duo>
                <Duo imgSrc={whyJoin.image} imgAlt={whyJoin.imageAlt}>
                    <h3 className="font-semibold">{whyJoin.title}</h3>
                    <p className="font-medium whitespace-pre-line">{whyJoin.content}</p>
                </Duo>
                <Duo imgSrc={clubStory.image} imgAlt={clubStory.imageAlt} imgFirst>
                    <h3 className="font-semibold">{clubStory.title}</h3>
                    <p className="font-medium whitespace-pre-line">{clubStory.content}</p>
                </Duo>
                <Duo imgSrc={ourPeople.image} imgAlt={ourPeople.imageAlt}>
                    <h3 className="font-semibold">{ourPeople.title}</h3>
                    <p className="font-medium whitespace-pre-line">{ourPeople.content}</p>
                    <div className="w-auto">
                        <Button variant="secondary" color="yellow" href="/about/team">
                            Meet the team ⮕
                        </Button>
                    </div>
                </Duo>
            </AboutPageBody>
        </StandardPageLayout>
    );
}
