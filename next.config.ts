import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  images: {
    formats: ["image/avif", "image/webp"], 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "grainy-gradients.vercel.app",
      },
      {
        protocol: "https",
        hostname: "kapmc.kapmi.edu.in",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "ibb.co",
      },
      // ADDED: Hostname for your Netlify uploads
      {
        protocol: "https",
        hostname: "dhanushh12.netlify.app",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "gsap", "@gsap/react"],
    typedRoutes: true,
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;