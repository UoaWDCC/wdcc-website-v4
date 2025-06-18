"use client";

import StandardPageLayout from "@/components/old/layout/StandardPageLayout";
import Header from "@/components/old/layout/pageheaders/Header";

export default function PMPage() {
    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "green" }}
                title="make agile great again as a WDCC Project Manager"
                backlink={{ label: "projects", href: "/projects#roles" }}
            />

            <div className="flex flex-col gap-24 py-24">
                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">content tba</h2>
                    <p>content tba</p>
                </div>
            </div>
        </StandardPageLayout>
    );
}
