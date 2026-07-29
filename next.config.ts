import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Brand correction: the candidates page moved with the Danahe spelling.
      {
        source: "/trabaja-con-danae",
        destination: "/trabaja-con-danahe",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
