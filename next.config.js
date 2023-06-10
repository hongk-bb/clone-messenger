/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
    // ? "next": "13.3.1" is required, but later versions don't seem to need it
    // swcPlugins: [['next-superjson-plugin'], {}]
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  }
}

module.exports = nextConfig
