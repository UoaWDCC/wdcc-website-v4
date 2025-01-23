import InfoPill from "@/components/InfoPill";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import { FaqSelector } from "./_components/FaqSelector";
import { faqData } from "./_data/faq.data";

export default function FaqPage() {
    const minHeight: number = 420 + Math.max(...faqData.sections.map((section) => section.faqs.length)) * 50;

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="frequently asked questions"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <div style={{ minHeight: `${minHeight}px` }} className={`flex w-full flex-col items-center gap-24 py-20`}>
                <InfoPill text={faqData.info} />
                <FaqSelector sections={faqData.sections} />
            </div>
        </StandardPageLayout>
    );
}
