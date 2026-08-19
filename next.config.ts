import type { NextConfig } from "next";

const githubPagesBasePath = "/Curriculum-Vitae";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = configuredBasePath ?? (
  process.env.GITHUB_ACTIONS === "true" ? githubPagesBasePath : ""
);

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
