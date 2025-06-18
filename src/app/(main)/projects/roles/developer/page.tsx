"use client";

import React from "react";
import LearnCard from "@main/projects/roles/_components/LearnCard";
import MoreAboutProjects from "@main/projects/roles/_components/MoreAboutProjects";
import PastProjects from "@main/projects/roles/_components/PastProjects";
import RiveToggleButton from "@main/projects/roles/_components/RiveToggleButton";
import RolesHeader from "@main/projects/roles/_components/RolesHeader";
import SignupCard from "@/app/(main)/(hero)/_components/SignupCard";
import graphic1 from "@/assets/image/roles/roles_devs-01.webp";
import graphic2 from "@/assets/image/roles/roles_devs-02.webp";
import graphic3 from "@/assets/image/roles/roles_devs-03.webp";
import Arrow from "@/assets/svg/Arrow";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import RiveDuo from "@/components/old/rive/RiveDuo";
import RiveWrapper from "@/components/old/rive/RiveWrapper";
import { Button } from "@/components/primitives/Button";

export default function DeveloperPage() {
    const [animEnabled, setAnimEnabled] = React.useState(true);

    return (
        <StandardPageLayout className="bg-blue-500" navColor="dark">
            <RiveToggleButton animEnabled={animEnabled} setAnimEnabled={setAnimEnabled} />

            <RolesHeader
                variant={{ color: "blue" }}
                title="Code, load, and (don't) watch it explode as a WDCC Developer."
                role="Developer"
                description1="Lectures and labs teach you how to code, but projects teach you how to build."
                description2="As a developer in a WDCC Project, you’ll join a team of other students who share a passion for tech. Together, you’ll jumpstart your dev skills, build a real product, and learn industry practices in a supportive environment."
                backlink={{ label: "projects", href: "/projects#roles" }}
            />

            <div className="responsive-fullwidth flex flex-col gap-42 pb-32 text-white">
                <div className="m-0 flex w-screen flex-col items-center justify-center gap-2">
                    {/*<div className="h-[500px] rounded-2xl w-full bg-purple-300"></div>*/}
                    <div className="m-0 h-[500px] w-full min-w-[850px] lg:mx-auto lg:h-[850px]">
                        <RiveWrapper src={"/rive/wdcc_developer_main.riv"} isPlaying={animEnabled} />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button variant={{ style: "primary", color: "yellow" }} href="/projects/all">
                            View all projects <Arrow />
                        </Button>
                        <Button variant={{ style: "secondary", color: "light" }} href="/about/faq">
                            Projects FAQ
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-46 pt-2 pb-32 text-white">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-8 text-center">
                        <h2 className="text-4xl leading-[1.1] font-bold">
                            practice {"<this>"} and {"</that>"}
                        </h2>
                        <div className="grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                            <LearnCard
                                title={"teamwork"}
                                description={
                                    "producing something in a realistic agile tech team, making friends, and learning from each other."
                                }
                                graphic={graphic1}
                            />
                            <LearnCard
                                title={"building"}
                                description={
                                    "working in collaborative software teams. understand version control, the development lifecycle, and testing."
                                }
                                graphic={graphic2}
                            />
                            <LearnCard
                                title={"coding"}
                                description={
                                    "develop your programming skills in front and back-end technologies, with realistic tech stacks and tools."
                                }
                                graphic={graphic3}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-28">
                    <div className="flex flex-col gap-4 text-center">
                        <h2 className="text-4xl leading-none font-bold">uni projects could never.</h2>
                        <p className="text-md mx-auto leading-tight md:w-[75%]">
                            University tech curriculums will teach you the basics of code and craft, but projects let
                            you apply those skills in the way lectures and tutorials can&apos;t.
                        </p>
                    </div>
                    <RiveDuo rive={{ src: "/rive/wdcc_designer_2.riv", isPlaying: animEnabled }}>
                        <h3 className="text-2xl leading-none font-bold">Build something real.</h3>
                        <p className="text-md leading-tight">
                            WDCC Projects aren’t just random assignments given for the sake of doing something.
                        </p>
                        <p className="text-md leading-tight">
                            We only run projects with real-world clients, so you’ll deliver work that actually goes out
                            into the wild - from new brand websites for huge university clubs to patient simulators for
                            the Faculty of Medicine.
                        </p>
                    </RiveDuo>
                    <RiveDuo
                        imgFirst={true}
                        rive={{ src: "/rive/wdcc_designer_3.riv", isPlaying: animEnabled }}
                        largeAnim
                    >
                        <h3 className="text-2xl leading-none font-bold">Learn the tools of the trade.</h3>
                        <p className="text-md leading-tight">
                            WDCC teams use the same industry-standard tools and processes - from Figma and Jira to
                            GitHub and Fly - as real companies do.
                        </p>
                        <p className="text-md leading-tight">
                            You’ll be working in a realistic tech team following an Agile format with several other
                            developers, designers, and project leads. As a developer, you get to code in a collaborative
                            environment, implement designer visions, and work with complex deployments, data, and
                            infrastructure.
                        </p>
                    </RiveDuo>
                    <RiveDuo rive={{ src: "/rive/wdcc_developer_4.riv", isPlaying: animEnabled }} largeAnim>
                        <h3 className="text-2xl leading-none font-bold">Make your CV sparkle.</h3>
                        <p className="text-md leading-tight">
                            Project teams deliver apps, tools, and websites that have a real impact on your project
                            portfolio and CV.
                        </p>
                        <p className="text-md leading-tight">
                            The products you work on get deployed into real-world use, helping hundreds of other
                            students, staff, and community members do all kinds of things.{" "}
                        </p>
                        <p className="text-md leading-tight">
                            It&apos;s just like COMPSCI 399, but with bigger teams, bigger projects, and no risk of a
                            legion of Marketing students coming after you on Reddit because your project got co-opted by
                            the University.
                        </p>
                    </RiveDuo>
                </div>

                <MoreAboutProjects>
                    <p className="text-md leading-tight">
                        WDCC Projects are about more than code. Learn more about projects and how they work on these
                        pages:
                    </p>
                </MoreAboutProjects>

                <PastProjects />

                <SignupCard
                    SignUpCard={{
                        title: "Not a member yet?",
                        descriptionLineOne:
                            "Joining WDCC lets you stay updated on all of our workshops, events, and projects. It's also free!",
                        descriptionLineTwo: "Plus, membership lets you participate in a ",
                    }}
                />
            </div>
        </StandardPageLayout>
    );
}
