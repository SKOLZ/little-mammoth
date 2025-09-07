import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["src/styles"],
  },
  experimental: {
    useLightningcss: true,
  },
};

export default nextConfig;
