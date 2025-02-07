import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { withPayload } from "@payloadcms/next/withPayload";

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
    experimental: {
        // reactCompiler: true,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    images: {
        remotePatterns: [],
    },
};

export default withPayload(bundleAnalyzer(nextConfig));
