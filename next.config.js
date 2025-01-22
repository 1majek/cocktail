/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: [],
  },
  basePath: '/cocktail',
  // Disable server-side features since GitHub Pages is static
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig; 