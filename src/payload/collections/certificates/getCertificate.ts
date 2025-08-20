"use server";

import { CertificateSelect } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";
import { parseCertificate } from "./parseCertificate";

// return Certificate
export const getCertificate = async (uuid: string) => {
    const payload = await getPayload();
    const certificate = await payload
        .findByID<typeof SLUG.CERTIFICATE, true, CertificateSelect>({
            id: uuid,
            collection: SLUG.CERTIFICATE,
        })
        .then((c) => parseCertificate(c))
        .catch(() => null);

    return certificate;
};
