/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: !debug ? '/rat' : '/',
  basePath: !debug ? '/rat' : undefined,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
}

module.exports = nextConfig
