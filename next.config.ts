import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const workspaceRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["workspace.featurize.cn"],
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: workspaceRoot,
  },
};

export default nextConfig;