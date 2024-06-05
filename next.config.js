const isDev = process.env.NODE_ENV === 'development'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isDev ? '' : undefined,
}

module.exports = nextConfig
