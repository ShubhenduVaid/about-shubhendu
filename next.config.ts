import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["miro.medium.com", "media.licdn.com"],
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "cache-control",
            value: "max-age=0, s-maxage=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
