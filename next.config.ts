import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["src/styles"],
  },
  cacheComponents: true,
};

export default nextConfig;
