"use client";

import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";


export default function DeveloperPage() {
    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="become a project developer and "
                backlink={{ label: "projects", href: "/projects" }}
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
