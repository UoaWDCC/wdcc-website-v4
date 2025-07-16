import Image from "next/image";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { getAboutPage } from "@/payload/globals/aboutpage/getAboutPage";
import { parseAboutPage } from "@/payload/globals/aboutpage/parseAboutPage";
import { AboutPageHeader, GenInfo, NestedDiv, OurPeople, Quote, WhyJoin } from "./_components";
import { aboutData as aboutDataFallback } from "./_data/about.data";

export default async function AboutPage() {
    // TODO: standardize fetching, parsing, and removing of fallback data
    const aboutData = parseAboutPage(await getAboutPage()) ?? aboutDataFallback;

    return (
        <StandardPageLayout navColor="dark">
            <AboutPageHeader header={aboutData.header} />

            <NestedDiv
                outer="flex w-full items-center justify-center py-20 responsive-fullwidth"
                inner="flex w-[80%] max-w-[1100px] flex-col gap-16 sm:gap-24"
            >
                <GenInfo genInfo={aboutData.genInfo} />
                <WhyJoin whyJoin={aboutData.whyJoin} />
                {/* TODO: need ClubStory copy text */}
                {/* <ClubStory clubStory={aboutData.clubStory} /> */}
                <OurPeople ourPeople={aboutData.ourPeople} />
            </NestedDiv>

            <NestedDiv
                outer="flex w-full items-center justify-center py-28 bg-blue-20 responsive-fullwidth"
                inner="flex w-[80%] xl:w-[50%] max-w-[1100px] flex-col gap-4"
            >
                <Quote
                    quote={aboutData.quoteSection.quote}
                    author={aboutData.quoteSection.author}
                    subscript={aboutData.quoteSection.subscript}
                />
            </NestedDiv>

            <Image
                width={600}
                height={400}
                src={aboutData.endImage.image}
                alt={aboutData.endImage.imageAlt}
                className="responsive-fullwidth w-full"
            />
        </StandardPageLayout>
    );
}
