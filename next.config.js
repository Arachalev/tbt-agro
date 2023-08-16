/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.tbt.com.ng/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "test.tbt.com.ng/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
