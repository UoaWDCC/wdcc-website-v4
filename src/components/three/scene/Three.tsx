"use client";

import { bg, t } from "@/components/three/globals/tunnel";

export const Three = ({ children }: { children: React.ReactNode }) => {
    return <t.In>{children}</t.In>;
};

export const ThreeBackground = ({ children }: { children: React.ReactNode }) => {
    return <bg.In>{children}</bg.In>;
};
