import { AboutPage } from "@/types/pages/AboutPage";
import Arrow from "@/assets/svg/Arrow";
import { PageHeader } from "@/components/layout";

type AboutPageHeaderProps = {
    header: AboutPage["header"];
};

export default function AboutPageHeader({ header }: AboutPageHeaderProps) {
    return (
        <PageHeader
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
    );
}
