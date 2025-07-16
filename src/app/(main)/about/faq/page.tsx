import PageHeader from "@/components/layout/pageheaders/PageHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { getFaqPage } from "@/payload/globals/faqpage/getFaqPage";
import { parseFaqPage } from "@/payload/globals/faqpage/parseFaqPage";
import InfoPill from "../_components/InfoPill";
import { FaqSelector } from "./_components/FaqSelector";
import { faqData as faqFallbackData } from "./_data/faq.data";

export default async function FaqPage() {
    const faqData = parseFaqPage(await getFaqPage()) ?? faqFallbackData;

    const minHeight: number = 420 + Math.max(...faqData.sections.map((section) => section.faqs.length)) * 50;

    return (
        <StandardPageLayout>
            <PageHeader
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
