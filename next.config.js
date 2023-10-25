/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        domains: ['robohash.org', 'img.dog-learn.com']
    },
    reactStrictMode: true
}

module.exports = nextConfig
