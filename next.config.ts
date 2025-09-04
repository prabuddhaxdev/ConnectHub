// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/f/**", // allow everything under /f/
      },
    ],
    // OR fallback approach:
    // domains: ["utfs.io"],
  },
};

export default nextConfig;

