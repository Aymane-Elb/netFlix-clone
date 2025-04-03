import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**", // Allow all paths under /t/p/ (e.g., /t/p/original, /t/p/w500)
      },
    ],
  },
};

export default nextConfig;