/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freepnglogos.com",
      },
    ],
  },
};

export default nextConfig;
