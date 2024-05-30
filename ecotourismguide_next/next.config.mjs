/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.builder.io'],
        remotePatterns: [
          {
              hostname:"images.unsplash.com"
          }
      ]
      },
};

export default nextConfig;

  
