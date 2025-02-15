'use client'

import React from "react";

import { Button } from "@/components/primitives/Button";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import DatingPage from "./_components/DatingPageRender"

export default function Home() {
    const [showPage, setShowPage] = React.useState(false);


    return (
        showPage ?
            <>
                <DatingPage/>
            </>
            :
            <>
                <div className="absolute -z-20 w-full h-[100vh] bg-gradient-to-b from-[#DD3173] to-[#DF99B9]">
                </div>
                <StandardPageLayout navColor="dark">
                    <div className="flex flex-col gap-10 h-[100vh] justify-center max-w-[600px]">
                        <p className="w-fit tracking-[0.15em] text-xs font-normal text-white bg-red-500 opacity-80">WDCC-TECH
                            CONFIDENTIAL /
                            RELEASE PROHIBITED</p>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-semibold text-white text-lg leading-none">WDCC [Dating & Compatibility
                                Club] Landing Concept v1.0</h1>
                            <p className="text-white text-md leading-[1.15]">this completely legitimate, non-troll page
                                will automatically play audio. sound on is recommended. please accept to view.</p>
                            <Button onClick={() => setShowPage(true)} className="bg-black bg-opacity-25 font-semibold"
                                    variant={{ color: "light", style: "secondary" }}>i understand</Button>
                        </div>

                        <p className="w-fit tracking-wide text-[10px] text-white opacity-50 leading-tight">
                            <strong>THIS PAGE CONTAINS PRIVILEGED INFORMATION. </strong>
                            Your access is monitored and will be recorded. If you believe you have accessed this page in error, contact WDCC Security immediately and provide the identity code Z135-0. Do not
                            discuss the contents of this page with anyone, even close family or friends. Unauthorised viewing is strictly prohibited, and is subject to international sanctions under a no-tolerance policy. WDCC 2025, rights reserved.
                        </p>
                    </div>
                </StandardPageLayout>
            </>

    );
}
