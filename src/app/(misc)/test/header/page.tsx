"use client";

import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import EventHeader from "@/components/old/layout/pageheaders/EventHeader";
import Header from "@/components/old/layout/pageheaders/Header";
import ProjectHeader from "@/components/old/layout/pageheaders/ProjectHeader";

// import { Button } from "@/components/primitives/Button";

export default function TestPage() {
    /* Demo of standard component implementation */

    return (
        <StandardPageLayout>
            {/* Blue primary header with two buttons */}
            <Header
                variant={{ style: "primary", color: "blue" }}
                title="projects"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis condimentum orci et congue. Donec at sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                primaryButton={{ label: "Apply for a project ⮕", href: "https://google.com" }}
                secondaryButton={{ label: "View past projects", href: "/" }}
            />

            {/* Brand-color primary header without buttons */}
            <Header
                variant={{ style: "primary", color: "brand" }}
                title="projects"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis condimentum orci et congue. Donec at sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            />

            {/* Green secondary header with backlink */}
            <Header
                variant={{ style: "secondary", color: "green" }}
                title="i'm a header"
                backlink={{ label: "Back to the home page", href: "/" }}
            />

            {/* Yellow secondary header without backlink */}
            <Header variant={{ style: "secondary", color: "yellow" }} title="i'm a header" />

            {/* You can pass unused props e.g. buttons/descriptions to secondary headers, but they won't do anything */}
            <Header
                variant={{ style: "secondary", color: "brand" }}
                title="i'm also a header!"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis condimentum orci et congue. Donec at sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                primaryButton={{ label: "hello", href: "/" }}
                secondaryButton={{ label: "hello", href: "/" }}
                backlink={{ label: "hello", href: "/" }}
            />

            {/* Project and event headers are seperate files - everything erxcept for title is optional.*/}
            {/* This project header has buttons, but no description*/}
            <ProjectHeader
                title="i'm a project header"
                primaryButton={{ label: "View the live demo", href: "/" }}
                secondaryButton={{ label: "GitHub", href: "/" }}
                backlink={{ label: "2024 Projects", href: "/" }}
            />

            {/* Project header with description */}
            <ProjectHeader
                title="Merged"
                description="The University of Auckland came to WDCC with a proposal: what if there was a specific dating app designed for tech students? Merged is a first-in-class dating platform built on cutting edge technologies that lets UoA CS, SE, and other majors' students find their own partners - so they can commit, merge, and deploy together."
                primaryButton={{ label: "View a live demo", href: "/" }}
                secondaryButton={{ label: "GitHub", href: "/" }}
                backlink={{ label: "2025 Projects", href: "/" }}
            />

            {/* Event headers are similar, but also include a where and when field. */}
            <EventHeader
                title="Gambling Workshop"
                description="Making $$$ from your new big tech internship? Well, don't just let those numbers sit there in your account. Join WDCC's Education Executives as we teach you the principles of gambling, casino tips, and card counting."
                primaryButton={{ label: "Sign up", href: "/" }}
                secondaryButton={{ label: "Learn more", href: "/" }}
                backlink={{ label: "2025 Events", href: "/" }}
                when="11:30am, February 31 2025"
                where="SkyCity Auckland (meet by the Sky Tower)"
            />
        </StandardPageLayout>
    );
}
