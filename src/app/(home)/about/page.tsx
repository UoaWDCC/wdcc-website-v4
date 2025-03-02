import Image from "next/image";

import { ParsePayloadAboutPage } from "@/types/parser/ParsePayloadAboutPage";

import { getAboutPage } from "@/actions/Pages/getAbooutPage";
import Arrow from "@/assets/svg/Arrow";
import Duo from "@/components/Duo";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";
import NestedDiv from "@/components/NestedDiv";
import { Button } from "@/components/primitives/Button";

import Quote from "./_components/Quote";
import { aboutData as hardCodedAboutPage } from "./_data/about.data";

export const revalidate = 60;

export default async function AboutPage() {
    let aboutData = ParsePayloadAboutPage(await getAboutPage());

    if (!aboutData) {
        aboutData = hardCodedAboutPage;
    }
    const header = aboutData.header;
    const genInfo = aboutData.genInfo;
    const whyJoin = aboutData.whyJoin;
    const clubStory = aboutData.clubStory;
    const ourPeople = aboutData.ourPeople;
    const quoteSection = aboutData.quoteSection;
    const endImage = aboutData.endImage;

    return (
        <StandardPageLayout navColor="dark">
            <Header
                variant={{ style: "primary", color: "brand" }}
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
                secondaryButton={{ label: "Frequently asked questions", href: "/about/faq" }}
            />

            <NestedDiv
                outer="flex w-full items-center justify-center py-20 responsive-fullwidth"
                inner="flex w-[80%] max-w-[1100px] flex-col gap-16 sm:gap-24"
            >
                <Duo image={{ src: genInfo.image, alt: genInfo.imageAlt }}>
                    <p className="text-md leading-tight font-semibold whitespace-pre-line sm:text-lg">
                        {genInfo.firstPart}
                    </p>
                    <p className="text-md text-blue-brand leading-tight font-semibold whitespace-pre-line sm:text-lg">
                        {genInfo.secondPart}
                    </p>
                </Duo>

                <Duo image={{ src: whyJoin.image, alt: whyJoin.imageAlt }}>
                    <h3 className="text-md font-bold">{whyJoin.title}</h3>
                    <p className="leading-[1.3] whitespace-pre-line">{whyJoin.content}</p>
                </Duo>

                <Duo image={{ src: clubStory.image, alt: clubStory.imageAlt }} imgFirst>
                    <h3 className="text-md font-bold">{clubStory.title}</h3>
                    <p className="leading-[1.3] whitespace-pre-line">{clubStory.content}</p>
                </Duo>

                <Duo image={{ src: ourPeople.image, alt: ourPeople.imageAlt }}>
                    <h3 className="text-md font-bold">{ourPeople.title}</h3>
                    <p className="leading-[1.3] whitespace-pre-line">{ourPeople.content}</p>
                    <div className="w-auto">
                        <Button variant={{ style: "secondary", color: "yellow" }} href="/about/team">
                            Meet the team <Arrow />
                        </Button>
                    </div>
                </Duo>
            </NestedDiv>

            <NestedDiv
                outer="flex w-full items-center justify-center py-28 bg-blue-20 responsive-fullwidth"
                inner="flex w-[80%] xl:w-[50%] max-w-[1100px] flex-col gap-4"
            >
                <Quote quote={quoteSection.quote} author={quoteSection.author} subscript={quoteSection.subscript} />
            </NestedDiv>

            <Image
                width={600}
                height={400}
                src={endImage.image}
                alt={endImage.imageAlt}
                className="responsive-fullwidth w-full"
            />
        </StandardPageLayout>
    );
}
