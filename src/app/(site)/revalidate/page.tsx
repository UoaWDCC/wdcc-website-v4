"use client";

import { Button } from "@/components/primitives/Button";

import { revalidateAllRoutes } from "./_actions/revalidateAction";

export default function RevalidatePage() {
    function handleClick() {
        if (confirm(`Are you sure you want to revalidate all routes on ${process.env.NODE_ENV}?`)) {
            void revalidateAllRoutes();
            alert("All routes revalidated!");
        }
    }

    return (
        <div className="text-md p-10">
            <h1 className="text-lg font-bold">CMS Revalidation Page</h1>
            <p>This is an admin tool to trigger a full site refresh. Use after changing the CMS.</p>
            <ul className="list-inside list-disc">
                <li>Dynamic pages (e.g. /projects/2024/vps) automatically revalidate</li>
                <li>Static pages (e.g. /about) need to be rebuilt manually by pressing this button</li>
            </ul>
            <br />
            <p>NOT CURRENTLY FUNCTIONAL - TRIGGER REDEPLOY INSTEAD.</p>
            <br />
            <Button onClick={handleClick}>Revalidate</Button>
        </div>
    );
}
