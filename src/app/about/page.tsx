import Image from "next/image";

import Arrow from "@/assets/svg/Arrow";
import Header from "@/components/layout/Headers/Header";
import NestedDiv from "@/components/NestedDiv";
import { Button } from "@/components/primitives/Button";
import StandardPageLayout from "@/components/StandardPageLayout";

import Duo from "./_components/Duo";
import Quote from "./_components/Quote";
import { aboutData } from "./_data/about.data";

export default function AboutPage() {
    const header = aboutData.header;
    const genInfo = aboutData.genInfo;
    const whyJoin = aboutData.whyJoin;
    const clubStory = aboutData.clubStory;
    const ourPeople = aboutData.ourPeople;
    const quoteSection = aboutData.quoteSection;
    const endImage = aboutData.endImage;

    return (
        <StandardPageLayout>
            <Header
                variant="primary"
                color="brand"
                title={header.title}
                description={header.content}
                primaryButton={{
                    label: (
                        <>
                            Meet the team <Arrow />
                        </>
                    ),
                    href: "/about/team",
                }}
                secondaryButton={{ label: "Frequently asked questions", href: "/faq" }}
            />

            <NestedDiv
                outer="flex w-full items-center justify-center py-20"
                inner="flex w-[80%] max-w-[1100px] flex-col gap-24"
            >
                <Duo image={{ src: genInfo.image, alt: genInfo.imageAlt }}>
                    <p className="whitespace-pre-line text-lg font-semibold">{genInfo.firstPart}</p>
                    <p className="whitespace-pre-line text-lg font-semibold text-blue-brand">{genInfo.secondPart}</p>
                </Duo>

                <Duo image={{ src: whyJoin.image, alt: whyJoin.imageAlt }}>
                    <h3 className="font-semibold">{whyJoin.title}</h3>
                    <p className="whitespace-pre-line">{whyJoin.content}</p>
                </Duo>

                <Duo image={{ src: clubStory.image, alt: clubStory.imageAlt }} imgFirst>
                    <h3 className="font-semibold">{clubStory.title}</h3>
                    <p className="whitespace-pre-line">{clubStory.content}</p>
                </Duo>

                <Duo image={{ src: ourPeople.image, alt: ourPeople.imageAlt }}>
                    <h3 className="font-semibold">{ourPeople.title}</h3>
                    <p className="whitespace-pre-line">{ourPeople.content}</p>
                    <div className="w-auto">
                        <Button variant="secondary" color="yellow" href="/about/team">
                            Meet the team <Arrow />
                        </Button>
                    </div>
                </Duo>
            </NestedDiv>

            <NestedDiv
                outer="flex w-full items-center justify-center py-20 bg-blue-20"
                inner="flex w-[80%] max-w-[1100px] flex-col gap-4"
            >
                {/* TODO: Make quote mark more responsive? */}
                <Quote quote={quoteSection.quote} author={quoteSection.author} subscript={quoteSection.subscript} />
            </NestedDiv>

            {/* TODO: Image quality? */}
            <Image src={endImage.image} alt={endImage.imageAlt} />
        </StandardPageLayout>
    );
}
