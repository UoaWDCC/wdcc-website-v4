import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
        reactCompiler: true,
    },
};

export default withPayload(nextConfig);
