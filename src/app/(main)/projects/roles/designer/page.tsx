"use client";

import React from "react";
import SignupCard from "@main/(landing)/_components/SignupCard";
import LearnCard from "@main/projects/roles/_components/LearnCard";
import MoreAboutProjects from "@main/projects/roles/_components/MoreAboutProjects";
import PastProjects from "@main/projects/roles/_components/PastProjects";
import RiveToggleButton from "@main/projects/roles/_components/RiveToggleButton";
import RolesHeader from "@main/projects/roles/_components/RolesHeader";
import graphic1 from "@/assets/image/roles/roles_design-01.webp";
import graphic2 from "@/assets/image/roles/roles_design-02.webp";
import graphic3 from "@/assets/image/roles/roles_design-03.webp";
import Arrow from "@/assets/svg/Arrow";
import StandardPageLayout from "@/components/layout/StandardPageLayout";
import { Button } from "@/components/primitives/Button";
import RiveDuo from "@/components/rive/RiveDuo";
import RiveWrapper from "@/components/rive/RiveWrapper";

export default function DesignerPage() {
    const [animEnabled, setAnimEnabled] = React.useState(true);

    return (
        <StandardPageLayout className="bg-purple-500" navColor="dark">
            <RiveToggleButton animEnabled={animEnabled} setAnimEnabled={setAnimEnabled} />

            <RolesHeader
                variant={{ color: "purple" }}
                title="design, align, and shine as a WDCC Designer"
                role="Design"
                description1="The best web development projects don’t get there just because of code."
                description2="As a designer in a WDCC Project, you’ll help craft beautiful, usable, and practical solutions to some of our community’s coolest tech challenges."
                backlink={{ label: "projects", href: "/projects#roles" }}
            />

            <div className="responsive-fullwidth flex flex-col gap-42 pb-32 text-white">
                <div className="m-0 flex w-screen flex-col items-center justify-center gap-2">
                    {/*<div className="h-[500px] rounded-2xl w-full bg-purple-300"></div>*/}
                    <div className="m-0 h-[500px] w-full min-w-[850px] lg:mx-auto lg:h-[850px]">
                        <RiveWrapper src={"/rive/wdcc_designer_main.riv"} isPlaying={animEnabled} />
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
                        <h2 className="text-4xl leading-[1.1] font-bold">practice fantastic things.</h2>
                        <div className="grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                            <LearnCard
                                title={"teamwork"}
                                description={
                                    "producing something in a realistic agile tech team, making friends, and learning from each other."
                                }
                                graphic={graphic1}
                            />
                            <LearnCard
                                title={"research"}
                                description={
                                    "understanding client needs, working with feedback, and participating in a designer-developer process."
                                }
                                graphic={graphic2}
                            />
                            <LearnCard
                                title={"design"}
                                description={
                                    "make something beautiful for the world around you. improve your design theory, presentation skills, and creative craft."
                                }
                                graphic={graphic3}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-28">
                    <div className="flex flex-col gap-4 text-center">
                        <h2 className="text-4xl leading-none font-bold">go a step past theory.</h2>
                        <p className="text-md mx-auto leading-tight md:w-[75%]">
                            University tech curriculums will teach you the basics of code and craft, but projects let
                            you apply those skills in the way lectures and tutorials can&apos;t.
                        </p>
                    </div>
                    <RiveDuo rive={{ src: "/rive/wdcc_designer_2.riv", isPlaying: animEnabled }}>
                        <h3 className="text-2xl leading-none font-bold">Design something real.</h3>
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
                            developers, leads, and project managers. You’ll learn to balance the designer-developer
                            relationship and gain a practical understanding of design in a tech environment.
                        </p>
                    </RiveDuo>
                    <RiveDuo rive={{ src: "/rive/wdcc_designer_4.riv", isPlaying: animEnabled }} largeAnim>
                        <h3 className="text-2xl leading-none font-bold">Make your portfolio sparkle.</h3>
                        <p className="text-md leading-tight">
                            Project teams deliver apps, tools, and websites that have a real impact on your portfolio
                            and CV.
                        </p>
                        <p className="text-md leading-tight">
                            The products you work on get deployed into real-world use, helping hundreds of other
                            students, staff, and community members do all kinds of things.{" "}
                        </p>
                        <p className="text-md leading-tight">
                            At the end of the day, WDCC Projects are things you can point at in job interviews and say
                            `&quot;I made that, and you can use it`&quot;.
                        </p>
                    </RiveDuo>
                </div>

                <MoreAboutProjects>
                    <p className="text-md leading-tight">
                        WDCC Projects are about more than design. Learn more about projects and how they work on these
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
