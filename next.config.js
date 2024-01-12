/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  /*   trailingSlash: true, */
  images: { unoptimized: true },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
