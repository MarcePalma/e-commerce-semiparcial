/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

const withImages = require('next-images');

module.exports = withImages({
  ...nextConfig,
  images: {
    domains: ['fakestoreapi.com', 'images.unsplash.com'],
  },
});