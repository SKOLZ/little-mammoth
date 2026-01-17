import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["src/styles"],
  },
  reactStrictMode: true,
  cacheComponents: true,
};

export default nextConfig;
