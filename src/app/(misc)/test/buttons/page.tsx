"use client";

import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { Button } from "@/components/primitives/Button";

export default function TestSponsorPage() {
    return (
        <StandardPageLayout>
            <div className="flex min-h-dvh w-dvw flex-col items-center justify-center gap-16">
                <div className="flex gap-8">
                    <div className="flex flex-col gap-8">
                        <Button variant={{ style: "primary", color: "blue" }}>primary blue</Button>
                        <Button variant={{ style: "primary", color: "dark" }}>primary dark</Button>
                        <Button variant={{ style: "primary", color: "light" }}>primary light</Button>
                        <Button variant={{ style: "primary", color: "purple" }}>primary purple</Button>
                        <Button variant={{ style: "primary", color: "yellow" }}>primary yellow</Button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Button variant={{ style: "secondary", color: "blue" }}>secondary blue</Button>
                        <Button variant={{ style: "secondary", color: "dark" }}>secondary dark</Button>
                        <Button variant={{ style: "secondary", color: "light" }}>secondary light</Button>
                        <Button variant={{ style: "secondary", color: "purple" }}>secondary purple</Button>
                        <Button variant={{ style: "secondary", color: "yellow" }}>secondary yellow</Button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Button variant={{ style: "tertiary", color: "blue" }}>tertiary blue</Button>
                        <Button variant={{ style: "tertiary", color: "dark" }}>tertiary dark</Button>
                        <Button variant={{ style: "tertiary", color: "light" }}>tertiary light</Button>
                        <Button variant={{ style: "tertiary", color: "purple" }}>tertiary purple</Button>
                        <Button variant={{ style: "tertiary", color: "yellow" }}>tertiary yellow</Button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Button variant={{ style: "text", color: "blue" }}>text blue</Button>
                        <Button variant={{ style: "text", color: "dark" }}>text dark</Button>
                        <Button variant={{ style: "text", color: "light" }}>text light</Button>
                        <Button variant={{ style: "text", color: "purple" }}>text purple</Button>
                        <Button variant={{ style: "text", color: "yellow" }}>text yellow</Button>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-2 px-16">
                    <Button variant={{ style: "primary", color: "blue", isJustified: true }}>
                        primary blue isJustified
                    </Button>
                    <Button variant={{ style: "primary", color: "dark", isJustified: true }}>
                        primary dark isJustified
                    </Button>
                    <Button variant={{ style: "primary", color: "light", isJustified: true }}>
                        primary light isJustified
                    </Button>
                    <Button variant={{ style: "primary", color: "purple", isJustified: true }}>
                        primary purple isJustified
                    </Button>
                    <Button variant={{ style: "primary", color: "yellow", isJustified: true }}>
                        primary yellow isJustified
                    </Button>
                </div>
            </div>
        </StandardPageLayout>
    );
}
