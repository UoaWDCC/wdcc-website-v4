import { ReactNode } from "react";
import { CertificateContentBlock } from "./CertificateContentBlock";

const ChrisSignature: SignatureType = {
    node: <p>Signature here</p>,
    name: "Chris Valenzuela",
    role: "co-president",
};
const KimberleySignature: SignatureType = {
    node: <p>Signature here</p>,
    name: "Kimberley Zhu",
    role: "co-president",
};

export const CertificateSignature = () => {
    return (
        <CertificateContentBlock className="items-center text-white">
            <div />
            {/* spacer */}
            <div className="flex gap-6">
                <Signature {...ChrisSignature} />
                <Signature {...KimberleySignature} />
            </div>
        </CertificateContentBlock>
    );
};

type SignatureType = {
    node: ReactNode;
    name: string;
    role: string;
};

const Signature = (signature: SignatureType) => {
    return (
        <div className="flex min-w-48 flex-col items-center gap-6">
            <div className="h-12">{signature.node}</div>
            <div className="flex flex-col gap-2 text-center whitespace-nowrap">
                <strong className="uppercase">{signature.name}</strong>
                <p className="uppercase">{signature.role}</p>
            </div>
        </div>
    );
};
