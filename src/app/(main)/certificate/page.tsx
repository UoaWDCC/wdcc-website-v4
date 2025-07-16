import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader, StandardPageLayout } from "@/components/layout";
import { getAllCertificates } from "@/payload/collections/certificates/getAllCertificates";

export const metadata: Metadata = {
    openGraph: {
        title: "WDCC certificates search",
        description: " ",
        url: "https://wdcc.co.nz/",
        images: "",
        siteName: "Web Development & Consulting Club",
    },
};

const CERT_VIEW_BASE_URL = "/certificate/view";

export default async function Page() {
    const receivers = await getAllCertificates();

    if (!receivers) {
        notFound();
    }

    return (
        <StandardPageLayout>
            <PageHeader variant={{ style: "primary", color: "blue" }} title="Certificates" description="wow" />
            <div className="flex flex-col gap-2 py-24">
                {receivers.map((receiver, i) => (
                    <Link
                        key={i}
                        className="flex w-full justify-between rounded-xl border p-4 hover:bg-neutral-100"
                        href={`${CERT_VIEW_BASE_URL}/${receiver.id}`}
                    >
                        <p>{receiver.name}</p>
                        <p>
                            {receiver.project.name} {receiver.project.year}
                        </p>
                    </Link>
                ))}
            </div>
        </StandardPageLayout>
    );
}
