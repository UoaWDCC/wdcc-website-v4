import { ParsePayloadFaqPage } from "@/types/parser/ParsePayloadFaqPage";

import { getFaqPage } from "@/actions/Pages/getFaqPage";
import InfoPill from "@/components/InfoPill";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import { FaqSelector } from "./_components/FaqSelector";
import { faqData as hardCodedFaq } from "./_data/faq.data";

export const revalidate = 60;

export default async function FaqPage() {
    //try get cms, if no cms then get hardCoded Faq
    let faqData = ParsePayloadFaqPage(await getFaqPage());
    if (!faqData) {
        faqData = hardCodedFaq;
    }
    const minHeight: number = 420 + Math.max(...faqData.sections.map((section) => section.faqs.length)) * 50;

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="frequently asked questions"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <div style={{ minHeight: `${minHeight}px` }} className="flex w-full flex-col items-center gap-24 py-24">
                <InfoPill text={faqData.info} />
                <FaqSelector sections={faqData.sections} />
            </div>
        </StandardPageLayout>
    );
}
