/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: !debug ? '/rat' : '',
  basePath: !debug ? '/rat' : '/',
}

module.exports = nextConfig
