import { CertificateType } from "@/types/models/Certificate";
import { Certificate, Project } from "@/payload/payload-types";

export const parseCertificate = (certificate: Certificate | null): CertificateType | null => {
    if (!certificate) {
        return null;
    }

    return {
        id: certificate.id,
        name: certificate.name,
        role: certificate.role,
        project: {
            name: (certificate.project as Project).name,
            year: (certificate.project as Project).year,
        },
    };
};
