"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Figma, 
  Github, 
  Dribbble, 
  Framer, 
  Slack, 
  Twitter, 
  Chrome, 
  Layers 
} from "lucide-react";

const partners = [
  { name: "Figma", icon: <Figma size={40} />, color: "#F24E1E" },
  { name: "Github", icon: <Github size={40} />, color: "#181717" },
  { name: "Framer", icon: <Framer size={40} />, color: "#0055FF" },
  { name: "Slack", icon: <Slack size={40} />, color: "#4A154B" },
  { name: "Dribbble", icon: <Dribbble size={40} />, color: "#EA4C89" },
  { name: "Twitter", icon: <Twitter size={40} />, color: "#1DA1F2" },
  { name: "Chrome", icon: <Chrome size={40} />, color: "#4285F4" },
  { name: "Layers", icon: <Layers size={40} />, color: "#000000" },
];

export default function SocialProof() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="relative w-full bg-white py-8 overflow-hidden selection:bg-black selection:text-white">
      
      {/* COMPACT BOLD HEADER */}
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 mb-6">
        <div className="flex items-center gap-4">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-black"
          >
            Industry Leaders
          </motion.span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>
      </div>

      <div className="relative flex items-center h-20">
        {/* EDGE GRADIENT MASKS */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* INFINITE MARQUEE */}
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {marqueeItems.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center gap-6 px-10 sm:px-14 group cursor-default"
            >
              {/* ICON WITH COLOR TRANSITION */}
              <div 
                className="transition-all duration-500 transform group-hover:scale-110"
                style={{ color: partner.color }}
              >
                <div className="opacity-40 saturate-[0.4] transition-all duration-500 group-hover:opacity-100 group-hover:saturate-100">
                  {partner.icon}
                </div>
              </div>

              {/* BRAND NAME */}
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300 transition-colors duration-500 group-hover:text-black">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM SEPARATOR (Snug to the marquee) */}
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 mt-6">
        <div className="h-px w-full bg-zinc-50" />
      </div>
    </section>
  );
}