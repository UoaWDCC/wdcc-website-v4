import PageHeader from "@/components/layout/pageheaders/PageHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { getFaqPage } from "@/payload/globals/faqpage/getFaqPage";
import InfoPill from "../_components/InfoPill";
import { FaqSelector } from "./_components/FaqSelector";

export default async function FaqPage() {
    const faqData = await getFaqPage();

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
