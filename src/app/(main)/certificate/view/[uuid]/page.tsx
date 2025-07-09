import { CertificateBorder } from "./_components/CertificateBorder";
import { CertificateContainer } from "./_components/CertificateContainer";
import { CertificateContent } from "./_components/CertificateContent";
import { CertificateDate } from "./_components/CertificateDate";
import { CertificateSignature } from "./_components/CertificateSignature";

export default async function Page({ params }: { params: Promise<{ uuid: string }> }) {
    const { uuid } = await params;

    return (
        <div className="background-certificate use-fixed-scale relative h-dvh w-dvw p-16">
            {/* bad code, erm anyways */}
            <div className="absolute inset-0 z-10 size-full p-16">
                <div className="size-full border-[0.28vw] border-white/20" />
            </div>
            <div className="background-certificate-radial absolute inset-0"></div>
            <CertificateBorder>
                <CertificateContainer>
                    <CertificateContent />
                    <CertificateSignature />
                    <CertificateDate />
                </CertificateContainer>
            </CertificateBorder>
        </div>
    );
}
