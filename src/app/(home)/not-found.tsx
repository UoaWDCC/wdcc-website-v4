"use client";

import { useRouter } from "next/navigation";

import StandardPageLayout from "@/components/layout/StandardPageLayout";
import { UnderlineLink } from "@/components/navigation/UnderlineLink";
import { Button } from "@/components/primitives/Button";

export default function NotFound() {
    const router = useRouter();

    return (
        <StandardPageLayout>
            <div className="my-24 grid place-items-center">
                <div className="flex h-min w-full flex-col items-center gap-4 whitespace-nowrap rounded-2xl bg-blue-50 py-16 text-center">
                    <h1 className="text-[128px] font-bold leading-[100px]">404</h1>
                    <div className="flex flex-col whitespace-pre">
                        <p>This page does not exist</p>
                        <div className="flex">
                            maybe you’re looking for our {""}
                            <UnderlineLink href="/pricing-xdx-real" className="font-semibold italic text-blue-brand">
                                pricing
                            </UnderlineLink>
                            ?
                        </div>
                    </div>
                    <Button onClick={() => router.back()}>Go back</Button>
                </div>
            </div>
        </StandardPageLayout>
    );
}
