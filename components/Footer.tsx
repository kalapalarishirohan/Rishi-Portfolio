"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const siteMap = ["Home.", "Projects.", "About.", "Blog.", "Connect."];
const socials = ["X.", "IG.", "BE.", "DB."];

export default function AnimatedPremiumFooter() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  } as const;

  return (
    <footer className="relative w-full bg-[#F6F6F6] pt-24 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden font-sans text-black selection:bg-black selection:text-white">
      
      {/* 1. TOP SECTION: THE GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 relative z-20"
      >
        
        {/* COLUMN 1: NEWSLETTER */}
        <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-4">
          <h3 className="text-2xl font-bold tracking-tight mb-2">Updates?</h3>
          <p className="text-zinc-500 text-sm mb-8">Sign in to our newsletter.</p>
          
          <div className="group space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Email.</label>
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="hello@rishi.dev" 
                className="w-full max-w-[260px] bg-white border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-black transition-all duration-300"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white p-3 border border-black hover:bg-zinc-800 transition-colors"
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* COLUMN 2: SITE MAP */}
        <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
          <h4 className="text-[11px] font-bold text-zinc-400 mb-6 uppercase tracking-[0.3em]">Site map.</h4>
          <ul className="space-y-3">
            {siteMap.map((item) => (
              <li key={item}>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5 }}
                  className="text-lg font-bold hover:text-zinc-400 transition-all duration-300 block"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* COLUMN 3: SOCIALS */}
        <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
          <h4 className="text-[11px] font-bold text-zinc-400 mb-6 uppercase tracking-[0.3em]">Social.</h4>
          <ul className="space-y-3">
            {socials.map((item) => (
              <li key={item}>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5 }}
                  className="text-lg font-bold hover:text-zinc-400 transition-all duration-300 block"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* COLUMN 4: CREDITS & LEGAL */}
        <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-4 flex flex-col justify-start md:items-end md:text-right text-zinc-500 text-[13px] font-medium leading-relaxed">
          <div className="space-y-1 mb-6">
            <p>Made by rishi.supply</p>
            <p>Last updated 1/08/26.</p>
            <p className="text-zinc-400">Copyright 2026 rishi. All rights reserved.</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-black transition-colors underline underline-offset-4 decoration-zinc-200">Terms of service.</a>
            <a href="#" className="hover:text-black transition-colors underline underline-offset-4 decoration-zinc-200">Privacy policy.</a>
          </div>
        </motion.div>
      </motion.div>

      {/* 2. DITHERED PATTERN OVERLAY */}
      <div 
        className="absolute inset-x-0 bottom-0 h-full pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
          backgroundSize: '4px 4px',
          maskImage: 'linear-gradient(to top, black, transparent)'
        }}
      />

      {/* 3. BIG LOGO WITH REVEAL ANIMATION */}
      <div className="mt-32 w-full flex justify-center">
        <motion.h2 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[25vw] font-bold tracking-tighter text-white leading-[0.7] pointer-events-none select-none uppercase"
        >
          rishi
        </motion.h2>
      </div>

      {/* 4. FLOATING BADGE (BOTTOM RIGHT) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 z-30"
      >
        <motion.div 
          whileHover={{ y: -5 }}
          className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-xl shadow-lg shadow-black/5 border border-zinc-100 cursor-pointer"
        >
            <div className="bg-black p-1.5 rounded-md">
                <Zap size={12} fill="white" className="text-white" />
            </div>
            <span className="text-[11px] font-bold text-zinc-800 tracking-tight">Built by Rishi</span>
        </motion.div>
      </motion.div>
    </footer>
  );
}
