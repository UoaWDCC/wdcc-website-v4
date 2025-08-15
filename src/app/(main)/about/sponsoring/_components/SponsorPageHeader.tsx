import Arrow from "@/assets/svg/Arrow";
import { PageHeader } from "@/components/layout";

export default function SponsorPageHeader() {
    const sponsorDescription =
        "WDCC is the largest tech club in Auckland. Learn about all the reasons to sponsor us, and reach out to us by email at outreach@wdcc.co.nz if you're interested!";

    return (
        <PageHeader
            variant={{ style: "primary", color: "purple" }}
            title={"Sponsoring WDCC"}
            description={sponsorDescription}
            primaryButton={{
                label: (
                    <>
                        Send us an email <Arrow />
                    </>
                ),
                href: "mailto:outreach@wdcc.co.nz",
            }}
            secondaryButton={{ label: "View our events", href: "/events" }}
        />
    );
}
