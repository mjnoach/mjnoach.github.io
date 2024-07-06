import MillionLint from '@million/lint'

const isDev = process.env.NODE_ENV === 'development'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
}

export default MillionLint.next({ rsc: true })(nextConfig)
