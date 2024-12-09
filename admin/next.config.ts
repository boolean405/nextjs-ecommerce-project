import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // port: "",
        pathname: "/dls4ah2ri/**",
      },
    ],
  },
};

export default nextConfig;
