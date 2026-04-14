import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Ensure SSR for all routes
  output: 'standalone',
  transpilePackages: ['@prisma/client'],
};

export default nextConfig;
