import React from "react";

import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import { TableOfContents } from "./_components/TableOfContents";

export default function DeveloperPage() {
    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="role of a project developer"
                backlink={{ label: "projects", href: "/projects" }}
            />

            <div className="flex flex-col gap-24 py-24">
                <BlogContent>
                    <div className="col-span-5 flex flex-col gap-5 xl:col-span-4">
                        {/* replace with mdx or cms?too */}
                        <h1 className="text-3xl font-bold" id="intro">
                            How do project work?
                        </h1>
                        <h2 className="text-xl font-bold" id="whos-involved">
                            Who’s involved
                        </h2>
                        <p>
                            Project members (developers) form the majority of the project team. They're in charge for
                            pretty much all the actual tasks and work output for the final solution. They would be
                            working on implementing features, fixing bugs, writing unit tests, performing code reviews
                            and other relevant work in making a software product.
                        </p>
                        <h2 className="text-xl font-bold" id="lifecycle-and-timelines">
                            Project lifecycle & timeline
                        </h2>
                        <p>
                            The timeline shown here outlines the key milestones and dates for the time period of the
                            project. The timeline ensures that projects are completed in a timely manner, while
                            considering exams and other bad time periods.
                        </p>
                        <h2 className="text-xl font-bold" id="tools-to-use">
                            Tools to use
                        </h2>
                        <p>
                            WDCC's Project have a set list of technologies that we use across all our projects such as
                            fly.io, github, github projects, github actions, figma, and google drive.
                        </p>
                        <p>
                            Core techonologies for building the application such as databases, frontend frameworks, and
                            backend frameworks are decided by project leads.
                        </p>
                    </div>
                </BlogContent>
            </div>
        </StandardPageLayout>
    );
}

export const BlogContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id="blog" className="grid grid-cols-5 gap-4">
            <>{children}</>
            <TableOfContents variant={{ color: "blue" }} />
        </div>
    );
};
