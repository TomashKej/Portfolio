import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /**
     * headers gives immutable generated image previews a long browser cache lifetime.
     */
    async headers() {
        return [
            {
                source: "/optimized/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
