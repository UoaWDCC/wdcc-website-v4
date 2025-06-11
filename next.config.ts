import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { withPayload } from "@payloadcms/next/withPayload";

// This type is made-up to satisfy TypeScript, feel free to adjust as needed
type WebpackConfig = {
    module: {
        rules: {
            test: RegExp;
            use: string[];
        }[];
    };
};

const glslTurbopackRule = {
    loaders: ["raw-loader", "glslify-loader"],
    as: "*.js",
};

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
    webpack: (config: WebpackConfig) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ["raw-loader", "glslify-loader"],
        });
        return config;
    },
    turbopack: {
        rules: {
            "*.glsl": glslTurbopackRule,
            "*.vs": glslTurbopackRule,
            "*.fs": glslTurbopackRule,
            "*.vert": glslTurbopackRule,
            "*.frag": glslTurbopackRule,
        },
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
