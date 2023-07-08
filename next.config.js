/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: "https://api.football-data.org/v4/:path*",
    },
  ],
};

module.exports = nextConfig;
