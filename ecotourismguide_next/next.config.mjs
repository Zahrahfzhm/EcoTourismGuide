/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.builder.io',
                pathname: '/api/v1/image/assets/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
