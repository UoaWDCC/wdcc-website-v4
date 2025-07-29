import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCertificate } from "@/payload/collections/certificates/getCertificate";
import { CertificateBase } from "./_components/CertificateBase";
import { CertificateContainer } from "./_components/CertificateContainer";
import { CertificateContent } from "./_components/CertificateContent";
import { CertificateDate } from "./_components/CertificateDate";
import { CertificatePadding } from "./_components/CertificatePadding";
import { CertificateSignature } from "./_components/CertificateSignature";

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

    const receiver = await getCertificate(uuid);

    if (!receiver) {
        notFound();
    }

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
