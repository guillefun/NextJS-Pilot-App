/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    experimental: {
        appDir: true
    },
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/posts',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
