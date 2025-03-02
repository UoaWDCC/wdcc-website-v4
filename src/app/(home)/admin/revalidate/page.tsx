"use client";

import { Button } from "@/components/primitives/Button";
import { revalidateAllRoutes } from "./revalidate-action";

export default function RevalidatePage() {
    function handleClick() {
        revalidateAllRoutes();
        console.log("All routes revalidated");
    }

    return (
        <div>
            <h1>CMS Revalidation Page</h1>
            <p>This is an admin tool to trigger a full site refresh. Use after changing the CMS.</p>
            <Button onClick={handleClick}>Revalidate</Button>
        </div>
    );
}
