 /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};
//module.exports = nextConfig;
