/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/nextjs-posts",
    experimental: {
        appDir: true
    },
    images: {
        domains: ['robohash.org', 'img.dog-learn.com'],
        unoptimized: true
    },
}

module.exports = nextConfig
