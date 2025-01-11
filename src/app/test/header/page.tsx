"use client";

import Header from "@/components/layout/Headers/Header";
import StandardPageLayout from "@/components/StandardPageLayout";

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
        </StandardPageLayout>
    );
}
