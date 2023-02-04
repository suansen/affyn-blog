/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_SECRET_KEY: process.env.API_SECRET_KEY
  }
}

module.exports = nextConfig
