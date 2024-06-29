/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,

    YOUR_MNEMONIC: process.env.YOUR_MNEMONIC,
    YOUR_INFURA_URL: process.env.YOUR_INFURA_URL,

    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  },
  output: "standalone",
};

export default nextConfig;
