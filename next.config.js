/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/guest/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
