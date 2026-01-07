"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Dither from './Dither'; 

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    },
  } as const;

  return (
    // Outer Wrapper: Provides the "margin" for the rounded section
    <section className="h-screen w-full bg-zinc-50 p-4 sm:p-6">
      
      {/* THE ROUNDED SECTION */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white border border-zinc-200/50 shadow-sm">
        
        {/* BACKGROUND LAYER - Grey Dither on White */}
        <div className="absolute inset-0 z-0">
          <Dither
            waveColor={[0.88, 0.88, 0.88]} // Lightest grey for a clean look
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.25}
            colorNum={4}
            waveAmplitude={0.15}
            waveFrequency={3}
            waveSpeed={0.03}
          />
          {/* Subtle Mask to keep the left side "cleaner" white */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-6 sm:px-12 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Reduced Headline Size */}
            <motion.h1
              variants={itemVariants}
              className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-black sm:text-6xl lg:text-7xl"
            >
              Hello, I am Rishi <br /> 
              a Product Developer.
            </motion.h1>

            {/* Smaller, cleaner sub-text */}
            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-2xl text-sm font-normal leading-relaxed text-zinc-500 sm:text-base"
            >
              Building web platforms and AI for small-scale businesses 
              and B2C products.
            </motion.p>

            {/* Actions: Modern Button Shapes */}
            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4">
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="flex items-center rounded-full border border-zinc-300 bg-white/50 px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-black backdrop-blur-sm transition-all hover:border-black hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
              >
                Inquire
              </a>
            </motion.div>
          </motion.div>

          {/* INTERNAL FOOTER: Inside the rounded section */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-10 left-8 flex items-center gap-6 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 sm:left-16 lg:left-24"
          >
            <a href="#" className="hover:text-black transition-colors">Github</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
          </motion.div>

          {/* Availability Badge */}
          <div className="absolute bottom-10 right-10 hidden items-center gap-2 lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
              Open for opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}