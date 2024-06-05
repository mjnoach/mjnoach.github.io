const production = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: production ? 'export' : undefined,
  basePath: production ? '/portfolio' : '',
}

module.exports = nextConfig
