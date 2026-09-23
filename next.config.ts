import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder host only — drop this once real photos live in /public.
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;
