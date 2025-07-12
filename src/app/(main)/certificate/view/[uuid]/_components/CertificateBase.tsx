import { ReactNode } from "react";
import { CertificateAbsBorder } from "./CertificateAbsBorder";

const CertificateBase = ({ children, style }: { children: ReactNode; style?: string }) => {
    switch (style) {
        // dark blue with pastel blue glow
        default: {
            return (
                <div className="background-certificate use-fixed-scale relative h-dvh w-dvw p-16">
                    {/* bad code, erm anyways */}
                    <CertificateAbsBorder />
                    <div className="background-certificate-radial absolute inset-0"></div>
                    {children}
                </div>
            );
        }
    }
};
export default CertificateBase;
