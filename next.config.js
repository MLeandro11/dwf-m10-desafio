/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  images: {
    domains: ["v5.airtableusercontent.com"],
  },
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
