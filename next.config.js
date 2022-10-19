/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api",
        destination: `http://요청할API주소`,
      },
    ];
  },
};

module.exports = nextConfig;
