import type { NextConfig } from "next";

import withBundleAnalyzer from "@next/bundle-analyzer";
import { withPayload } from "@payloadcms/next/withPayload";

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    images: {
        remotePatterns: [],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ["raw-loader", "glslify-loader"],
        });
        return config;
    },
    async redirects() {
        return [
            {
                source: "/workshops",
                destination: "/events",
                permanent: true,
            },
        ];
    },
};

export default withPayload(bundleAnalyzer(nextConfig));
