/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withImages = require('next-images');

module.exports = withImages({
  ...nextConfig,
  images: {
    domains: ['fakestoreapi.com'], // Agrega aquí el dominio de las imágenes externas
  },
});