import type { NextConfig } from "next";

const repo = process.env.GH_PAGES_REPO;
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
