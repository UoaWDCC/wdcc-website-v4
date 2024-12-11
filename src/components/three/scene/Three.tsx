"use client";

import { t } from "@/components/three/globals/tunnel";

export const Three = ({ children }: { children: React.ReactNode }) => {
    return <t.In>{children}</t.In>;
};
