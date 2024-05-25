/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        pathname: '/api/v1/image/assets/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Wisatawan',
        permanent: true, // Atur ke true untuk pengalihan permanen (301)
      },
    ];
  },
};

export default nextConfig;
