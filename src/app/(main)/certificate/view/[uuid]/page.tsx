import { Metadata } from "next";
import CertificateBase from "./_components/CertificateBase";
import { CertificateContainer } from "./_components/CertificateContainer";
import { CertificateContent } from "./_components/CertificateContent";
import { CertificateDate } from "./_components/CertificateDate";
import { CertificatePadding } from "./_components/CertificatePadding";
import { CertificateSignature } from "./_components/CertificateSignature";
import { receivers } from "./_data/mock.data";

export const metadata: Metadata = {
    openGraph: {
        title: "Nate Williamson - Certificate of Participation",
        description: " ",
        url: "https://wdcc.co.nz/",
        // TODO : change
        images: "https://standards-avoid-dj-outcomes.trycloudflare.com/api/certificate/uuid/",
        siteName: "Web Development & Consulting Club",
    },
};

export default async function Page({ params }: { params: Promise<{ uuid: string }> }) {
    const { uuid } = await params;

    const receiver = receivers.find((receiver) => receiver.uuid === uuid);

    if (!receiver) return <p>not found</p>;

    return (
        <CertificateBase>
            <CertificatePadding>
                <CertificateContainer>
                    <CertificateContent {...receiver} />
                    <CertificateSignature />
                    <CertificateDate {...receiver} />
                </CertificateContainer>
            </CertificatePadding>
        </CertificateBase>
    );
}
