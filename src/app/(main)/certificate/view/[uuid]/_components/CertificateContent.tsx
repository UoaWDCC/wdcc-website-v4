import { CertificateType } from "@/types/models/Certificate";
import WDCCLogo from "@/assets/svg/WDCCLogo";
import { CertificateContentBlock } from "./CertificateContentBlock";

export const CertificateContent = (receiver: CertificateType) => {
    return (
        <CertificateContentBlock>
            <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                    <WDCCLogo className="w-24 fill-white" />
                    <p className="font-bold uppercase">PROJECT</p>
                </div>
                <h1 className="flex flex-col leading-[175%] uppercase">
                    <span className="text-xl font-bold">CERTIFICATE</span>
                    <span className="text-lg">OF PARTICIPATION</span>
                </h1>
            </div>
            <div className="flex flex-col gap-6">
                <p className="font-bold uppercase">THIS CERTIFICATE ACKNOWLEDGES THAT</p>
                <h3 className="text-[2.25vw] font-bold">{receiver.name}</h3>
                <p className="w-[35vw]">
                    Has participated in a year long pro-bono project at the Web development and consultant club as
                    <br />
                    <span className="font-bold underline">{receiver.role}</span> for{" "}
                    <strong className="font-bold">{receiver.project.name}</strong> during the year{" "}
                    {receiver.project.year}.
                </p>
                <p className="w-[45.5vw]">
                    For his active and significant participation in this project we, web development and consultant club
                    proudly present this certificate.
                </p>
            </div>
            {/* spacer */}
            <div />
            <div />
        </CertificateContentBlock>
    );
};
