"use client";

import React from "react";

import { usePathname } from "next/navigation";

const RouteDisplay = ({ slug }: { slug: string }) => {
    const route = usePathname();
    return (
        <div className="fixed top-0 right-0 z-50 bg-black/10 p-2">
            <p>route: {route}</p>
            <p>param: {slug}</p>
        </div>
    );
};

export default RouteDisplay;
