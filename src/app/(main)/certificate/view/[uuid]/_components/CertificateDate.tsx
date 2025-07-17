import { CertificateType } from "@/types/models/Certificate";
import { CertificateContentBlock } from "./CertificateContentBlock";

export const CertificateDate = (receiver: CertificateType) => {
    return (
        <CertificateContentBlock className="items-end text-white">
            <div />
            {/* spacer */}
            <h3 className="w-min text-2xl font-bold whitespace-nowrap">
                {receiver.name} {receiver.project.year}
            </h3>
        </CertificateContentBlock>
    );
};
