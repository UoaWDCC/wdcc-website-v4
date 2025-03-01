import React from "react";

import { ArticleContent } from "@/components/article/ArticleContent";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

export default function DeveloperPage() {
    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="Developers in a WDCC project"
                backlink={{ label: "projects", href: "/projects" }}
            />

            <div className="flex flex-col gap-24 py-24">
                <ArticleContent variant={{ color: "blue" }}>
                    {/* replace with mdx or cms?too */}
                    <h1 className="text-3xl font-bold" id="intro">
                        How do project work?
                    </h1>
                    <p>
                        Project is a way for WDCC to provide students to gain industry experience by establishing pro
                        bono (voluntarily and without payment) projects on website design and development.
                    </p>
                    <h2 className="text-xl font-bold" id="whos-involved">
                        Who’s involved
                    </h2>
                    <p>
                        Project members (developers) form the majority of the project team. They&apos;re in charge for
                        pretty much all the actual tasks and work output for the final solution. They would be working
                        on implementing features, fixing bugs, writing unit tests, performing code reviews and other
                        relevant work in making a software product.
                    </p>
                    <h2 className="text-xl font-bold" id="tools-to-use">
                        Tools to use
                    </h2>
                    <p>
                        WDCC&apos;s Project have a set list of technologies that we use across all our projects such as
                        fly.io, github, github projects, github actions, figma, and google drive.
                    </p>
                    <p>
                        Core techonologies for building the application such as databases, frontend frameworks, and
                        backend frameworks are decided by project leads.
                    </p>
                    <h1 className="text-3xl font-bold" id="role-of-a-developer">
                        Role of a developer
                    </h1>
                    <p>
                        A project developer is responsible for dedicating a few hours a week towards collaborating with
                        your project team. Role of a developer can differ from project to project, assigned based on
                        personal interest and the requirements of a project.
                    </p>
                    <h2 className="text-xl font-bold" id="front-end-developer">
                        Front-end developer
                    </h2>
                    <p>
                        Frontend developers are responsible for building the visual and interactive elements on a
                        website and how the content is presented, including all the little user interface elements like
                        menus, dropdowns, transitions, and modals. As a frontend dev, you may work with HTML, CSS, and
                        JavaScript and its frameworks to build and maintain the UI, ensuring that it is responsive,
                        accessible, and visually appealing. You will work closely with the designer to turn wireframes
                        into functioning web pages, and collaborate with backend devs to integrate the front-end and
                        back-end functionality.
                    </p>
                    <h2 className="text-xl font-bold" id="back-end-developer">
                        Back-end developer
                    </h2>
                    <p>
                        Backend developers are responsible for creating the "guts" of the application which live on the
                        server, with a focus on making sure all the right data gets sent out to the browser to be
                        displayed. As a backend dev, you will create and maintain the server-side components of the
                        website, including developing and maintaining databases and working with APIs. You will work
                        with front-end devs to ensure the back-end functionality integrates seamlessly with the
                        front-end, and also collaborate with designers to ensure that the user experience is smooth and
                        consistent.
                    </p>
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
                        improvement are key elements of agile, enabling teams to quickly adapt to changing requirements
                        and priorities.
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
                        This should be really quick, roughly 10 - 15 minutes for the entire team and from
                        everyone&apos;s responses PMs and TLs can then reorganise resources for areas that might need
                        more help to meet sprint deadlines.
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
                </ArticleContent>
            </div>
        </StandardPageLayout>
    );
}
