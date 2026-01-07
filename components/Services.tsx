"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layout, Terminal } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Frontend Engineering",
    description: "Developing high-performance, pixel-perfect interfaces with React and Framer Motion.",
    icon: <Code2 size={20} />,
    slant: "hover:skew-x-[-2deg]",
  },
  {
    id: "02",
    title: "Technical Architecture",
    description: "Designing scalable system structures with a focus on clean code and performance.",
    icon: <Terminal size={20} />,
    slant: "hover:skew-x-[2deg]",
  },
  {
    id: "03",
    title: "Experience Design",
    description: "Creating intentional, minimalist user journeys where every interaction matters.",
    icon: <Layout size={20} />,
    slant: "hover:skew-x-[-2deg]",
  },
];

export default function Services() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 selection:bg-black selection:text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-400">SERVICES_02</span>
            <div className="h-[1px] w-12 bg-zinc-100" />
          </motion.div>
          <h2 className="text-4xl font-medium tracking-tighter text-black sm:text-5xl lg:text-6xl">
            Precision <span className="text-zinc-300 italic">Capabilities.</span>
          </h2>
        </div>

        {/* SLANT LAYOUT CARDS */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              // Staggering the horizontal alignment for the "Slant" look
              className={`group relative w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-500 ${service.slant} ${
                index === 1 ? "self-center" : index === 2 ? "self-end" : "self-start"
              }`}
            >
              {/* SLANTED HOVER BACKGROUND */}
              <div className="absolute inset-0 -translate-x-full bg-zinc-50 transition-transform duration-500 ease-out group-hover:translate-x-0" 
                   style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }} />

              <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                
                {/* LEFT: ID & ICON */}
                <div className="flex items-center gap-6">
                  <span className="font-mono text-sm font-bold text-zinc-300">
                    {service.id}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-white transition-transform duration-500 group-hover:rotate-[360deg]">
                    {service.icon}
                  </div>
                </div>

                {/* CENTER: TEXT */}
                <div className="flex-1">
                  <h3 className="text-2xl font-medium tracking-tight text-black sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                </div>

                {/* RIGHT: ACTION */}
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-zinc-200 transition-all duration-500 group-hover:w-16 group-hover:bg-black" />
                  <ArrowUpRight 
                    size={24} 
                    className="text-zinc-300 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" 
                  />
                </div>
              </div>

              {/* SLANT ACCENT LINE (Bottom) */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-black transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DECORATION */}
        <div className="mt-12 flex justify-between items-end border-t border-zinc-100 pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300">
            Available for Q1 / 2026
          </p>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-zinc-200" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}