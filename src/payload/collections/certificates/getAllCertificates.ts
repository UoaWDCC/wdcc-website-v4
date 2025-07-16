"use server";

import { CertificateType } from "@/types/models/Certificate";
import { CertificateSelect } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";
import { parseCertificate } from "./parseCertificate";

// return Certificate
export const getAllCertificates = async (page?: number): Promise<CertificateType[]> => {
    const payload = await getPayload();
    const certificate = await payload.find<typeof SLUG.CERTIFICATE, CertificateSelect>({
        collection: SLUG.CERTIFICATE,
        limit: 25,
    });

    const parsedCertificate = certificate.docs.map((c) => parseCertificate(c)).filter(Boolean) as CertificateType[];

    return parsedCertificate;
};
