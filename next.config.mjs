/** @type {import('next').NextConfig} */

// BASE_PATH is set automatically by the GitHub Actions workflow:
//   - repo named  mrdangwal.github.io  ->  '' (site at root URL)
//   - any other repo name, e.g. portfolio -> '/portfolio'
// Locally (npm run dev) it's unset, so everything serves from '/'.
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',            // static HTML export — required for GitHub Pages
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,       // keeps CSS/JS/font URLs correct under a sub-path
};

export default nextConfig;
