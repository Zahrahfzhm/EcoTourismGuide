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

  
