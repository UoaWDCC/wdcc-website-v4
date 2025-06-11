import InfoPill from "@/components/InfoPill";
import StandardPageLayout from "@/components/layout/StandardPageLayout";
import Header from "@/components/layout/pageheaders/Header";
import { getFaqPage } from "@/payload/globals/faqpage/getFaqPage";
import { parseFaqPage } from "@/payload/globals/faqpage/parseFaqPage";
import { FaqSelector } from "./_components/FaqSelector";
import { faqData as hardCodedFaq } from "./_data/faq.data";

export default async function FaqPage() {
    //try get cms, if no cms then get hardCoded Faq
    let faqData = parseFaqPage(await getFaqPage());
    if (!faqData) {
        faqData = hardCodedFaq;
    }
    const minHeight: number = 420 + Math.max(...faqData.sections.map((section) => section.faqs.length)) * 50;

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="Frequently Asked Questions"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <div style={{ minHeight: `${minHeight}px` }} className="flex w-full flex-col items-center gap-24 py-24">
                <InfoPill text={faqData.info} />
                <FaqSelector sections={faqData.sections} />
            </div>
        </StandardPageLayout>
    );
}
