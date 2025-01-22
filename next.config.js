/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: [],
  },
  // Disable server-side features since GitHub Pages is static
  trailingSlash: true,
};

module.exports = nextConfig; 