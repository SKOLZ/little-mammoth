import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["src/styles"],
  },
  experimental: {
    useLightningcss: true,
  },
  cacheComponents: true,
};

export default nextConfig;
