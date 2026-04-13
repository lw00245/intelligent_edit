import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const configFile = fileURLToPath(import.meta.url);
const projectRoot = path.dirname(configFile);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
  allowedDevOrigins: ["workspace.featurize.cn"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;