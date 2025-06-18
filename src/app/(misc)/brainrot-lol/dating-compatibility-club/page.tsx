"use client";

import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { Button } from "@/components/primitives/Button";
import React from "react";
import DatingPage from "./_components/DatingPageRender";

export default function Home() {
    const [showPage, setShowPage] = React.useState(false);

    return showPage ? (
        <>
            <DatingPage />
        </>
    ) : (
        <>
            <div className="absolute -z-20 h-[100vh] w-full bg-linear-to-b from-[#DD3173] to-[#DF99B9]"></div>
            <StandardPageLayout navColor="dark">
                <div className="flex h-[100vh] max-w-[600px] flex-col justify-center gap-10">
                    <p className="w-fit bg-red-500 text-xs font-normal tracking-[0.15em] text-white opacity-80">
                        WDCC-TECH CONFIDENTIAL / RELEASE PROHIBITED
                    </p>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg leading-none font-semibold text-white">
                            WDCC [Dating & Compatibility Club] Landing Concept v1.0
                        </h1>
                        <p className="text-md leading-[1.15] text-white">
                            this completely legitimate, non-troll page will automatically play audio. sound on is
                            recommended. please accept to view.
                        </p>
                        <Button
                            onClick={() => {
                                setShowPage(true);
                            }}
                            className="bg-opacity-25 bg-black font-semibold"
                            variant={{ color: "light", style: "secondary" }}
                        >
                            i understand
                        </Button>
                    </div>

                    <p className="w-fit text-[10px] leading-tight tracking-wide text-white opacity-50">
                        <strong>THIS PAGE CONTAINS PRIVILEGED INFORMATION. </strong>
                        Your access is monitored and will be recorded. If you believe you have accessed this page in
                        error, contact WDCC Security immediately and provide the identity code Z135-0. Do not discuss
                        the contents of this page with anyone, even close family or friends. Unauthorised viewing is
                        strictly prohibited, and is subject to international sanctions under a no-tolerance policy. WDCC
                        2025, rights reserved.
                    </p>
                </div>
            </StandardPageLayout>
        </>
    );
}
