/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/cocktail', // GitHub Pages repository name
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server-side features since GitHub Pages is static
  trailingSlash: true,
};

export default nextConfig;
