/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: "export",
    basePath: "/nextjs-posts",
    experimental: {
        appDir: true
    },
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
