import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // frame-src와 connect-src에 필요한 도메인을 명시적으로 허용합니다.
            value: "default-src 'self'; " +
                   "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
                   "style-src 'self' 'unsafe-inline'; " +
                   "img-src 'self' data: https:; " +
                   "font-src 'self' data:; " +
                   "frame-src 'self' https://app.family.co https://verify.walletconnect.com; " +
                   "connect-src 'self' https://*.walletconnect.com https://*.walletconnect.org wss://*.walletconnect.org https://rpc.maplabs.io https://eth-mainnet.g.alchemy.com;"
          },
        ],
      },
    ];
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;