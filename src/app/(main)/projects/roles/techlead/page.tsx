"use client";

import PageHeader from "@/components/layout/pageheaders/PageHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";

export default function TLPage() {
    return (
        <StandardPageLayout>
            <PageHeader
                variant={{ style: "secondary", color: "yellow" }}
                title="Techlead in a WDCC project"
                backlink={{ label: "projects", href: "/projects#roles" }}
            />

            <div className="flex flex-col gap-24 py-24">
                {/* This page is unused anyway and we wanna delete this component */}
                {/* <ArticleContent variant={{ color: "yellow" }}> */}
                {/* replace with mdx or cms?too */}
                <h1 className="text-3xl font-bold" id="role-of-a-techlead">
                    Role of a techlead
                </h1>
                <p>
                    The primary responsibilities of a tech lead include technical leadership whereby they must have
                    strong technical skills and be able to guide the team in making technical decisions, such as
                    choosing the right technology stack, architecture, and design patterns. Furthermore, they are
                    responsible for code reviews and providing feedback to developers, particularly at starting stages.
                </p>
                <h2 className="text-xl font-bold" id="tools-to-use">
                    Tools to use
                </h2>
                <p>
                    WDCC&apos;s project have a set list of technologies that we use across all our projects such as
                    fly.io, github, github projects, github actions, figma, and google drive.
                </p>
                <p>
                    Core techonologies for building the application such as databases, frontend frameworks, and backend
                    frameworks are decided by project leads.
                </p>
                <p>The tech lead is responsible for leading the team, ensuring that the team is aligned with the</p>
                <h1 className="text-3xl font-bold" id="agile-and-meetings">
                    Agile and Meetings
                </h1>
                <p>
                    WDCC structures all project teams as agile scrum teams, with slight variations to the scrum
                    methodology to work in a university context.
                </p>
                <p>
                    Agile teams work in short, iterative cycles (2 weeks for WDCC) to deliver small increments of
                    functionality that can be tested and validated by customers. Regular feedback and continuous
                    improvement are key elements of agile, enabling teams to quickly adapt to changing requirements and
                    priorities.
                </p>
                <h2 className="text-3xl font-bold" id="standups">
                    Standups
                </h2>
                <p>
                    At the start of all dev sessions, as well as other times where your team elects to run standups
                    (either online, or via chat), the point is to get the PM/TL as well as other team members up to
                    speed to where the team is up to. You will likely go through the following points:
                </p>
                <ul className="list-disc pl-6">
                    <li>What progress have you made since the last meeting?</li>
                    <li>What are you currently working on?</li>
                    <li>Are you blocked by anything?</li>
                    <li>Are you on track to finish your tasks by the end of the sprint?</li>
                </ul>
                <p>
                    This should be really quick, roughly 10 - 15 minutes for the entire team and from everyone&apos;s
                    responses PMs and TLs can then reorganise resources for areas that might need more help to meet
                    sprint deadlines.
                </p>
                <h2 className="text-3xl font-bold" id="dev-sessions">
                    Dev Sessions
                </h2>
                <p>
                    This is where all the fun happens! Dev sessions (in the timeline) are just a block of time that
                    everyone is available at, and is a chance for PMs and TLs to get up to date with everyone&apos;s
                    progress. This is also a chance for you to work on your tasks, or get help from PM (relating to
                    product queries) or the TL (relating to technical help). WDCC recommends teams to have time set
                    aside per week to do some dev work so that you have a chance to peer-program / collaborate with
                    other members of your team, and quickly get help if needed.
                </p>
                {/* </ArticleContent> */}
            </div>
        </StandardPageLayout>
    );
}
