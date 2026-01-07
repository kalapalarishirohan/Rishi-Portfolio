"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "DEPL_01",
    label: "Small-Headline",
    title: "School System",
    subtitle: "NSS CMRIT",
    url: "https://kapmc.kapmi.edu.in",
    theme: "white",
    content: "We built a <span class='font-bold text-black'>digital-first ecosystem</span> for <span class='font-bold text-black'>academic management.</span>",
    image: "https://i0.wp.com/cmrithyderabad.edu.in/wp-content/uploads/2023/12/Red-Ribbon-Campaign.jpg?w=1200&ssl=1",
  },
  {
    id: "DEPL_02",
    label: "Small-Sentence",
    title: "Forge Digital",
    url: "https://forgedigital.in",
    theme: "black",
    content: "The client launched <span class='font-bold text-white'>enterprise software</span> that optimized <span class='font-bold text-white'>daily operations.</span>",
    footer: "Forge Digital",
  },
  {
    id: "DEPL_03",
    label: "Big-Sentence",
    title: "Siya Jewels",
    url: "https://siyajewels.com",
    theme: "gray",
    content: "“Working with the team on <span class='font-bold text-black'>mobile optimization</span> was a pleasure. Their <span class='font-bold text-black'>checkout speed</span> is unmatched.”",
    author: "Siya Founder",
    role: "E-Com CEO",
    authorImg: "https://i.ibb.co/pjyNVk4h/Generated-Image-January-07-2026-11-15-PM.png"
  },
  {
    id: "DEPL_04",
    label: "Small-Headline",
    title: "Stories at Scale",
    subtitle: "Media Portal",
    url: "https://storiesatscale.in",
    theme: "white",
    content: "Architecting <span class='font-bold text-black'>global reach</span> for stories that need <span class='font-bold text-black'>massive scale.</span>",
    // Added a high-quality media/scale themed image
    image: "https://media.licdn.com/dms/image/v2/D4E3DAQFzo4AhApMaPw/image-scale_191_1128/B4EZmfA5jBHcAk-/0/1759309442155/storiesatscale_cover?e=1768413600&v=beta&t=x3-PPR-ZCtdijXVwfWcPByL-hz2HTrG0tlb1VE9VuOU",
  },
  {
    id: "DEPL_05",
    label: "Small-Sentence",
    title: "HSGA Portal",
    url: "https://hsgacmrit.in",
    theme: "black",
    content: "Redesigning the <span class='font-bold text-white'>student experience</span> with <span class='font-bold text-white'>better organization.</span>",
    footer: "HSGA Portal",
  },
  {
    id: "DEPL_06",
    label: "Big-Sentence",
    title: "Dhasha Media",
    url: "https://dhashamedia.com",
    theme: "gray",
    content: "“They improved our <span class='font-bold text-black'>brand visibility</span> and delivered a <span class='font-bold text-black'>perfect digital core.</span>”",
    author: "Dhasha Lead",
    role: "Marketing Director",
    authorImg: "https://dhanushh12.netlify.app/lovable-uploads/8840dc96-84cb-4c04-8605-2a74f585b88b.png"
  }
];

export default function ShowcaseSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#F3F3F3] py-16 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* GUIDELINE HEADER */}
        <div className="mb-10 flex justify-between items-end border-b border-zinc-200 pb-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 block mb-2">My Work // Deployment Archive</span>
            <h2 className="text-2xl font-medium italic text-zinc-800 tracking-tight leading-none">Project guidelines and execution</h2>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-black hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-black hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CARDS CONTAINER */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projects.map((p, i) => (
            <motion.a 
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              whileHover={{ y: -5 }}
              className={`group snap-start min-w-[100%] md:min-w-[45%] lg:min-w-[32%] h-[480px] rounded-[2.5rem] p-10 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all
                ${p.theme === 'white' ? 'bg-white border border-zinc-100 hover:border-zinc-300' : ''}
                ${p.theme === 'black' ? 'bg-[#0F0F0F] hover:bg-[#151515]' : ''}
                ${p.theme === 'gray' ? 'bg-[#EBEBEB] hover:bg-[#E5E5E5]' : ''}
              `}
            >
              {/* CARD TOP */}
              <div className="pointer-events-none">
                <span className={`text-[10px] font-bold uppercase tracking-widest block mb-10
                  ${p.theme === 'black' ? 'text-zinc-600' : 'text-zinc-400'}`}
                >
                  {p.label}
                </span>

                {p.theme === 'white' ? (
                  <div>
                    <h3 className="text-4xl font-normal leading-none text-black mb-4">
                      <span className="font-bold">{p.title}</span><br />
                      <span className="text-zinc-300">{p.subtitle}</span>
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: p.content }} />
                  </div>
                ) : (
                  <p className={`text-3xl lg:text-4xl font-normal leading-[1.15] tracking-tight
                    ${p.theme === 'black' ? 'text-zinc-500' : 'text-zinc-500'}`}
                    dangerouslySetInnerHTML={{ __html: p.content }}
                  />
                )}
              </div>

              {/* CARD BOTTOM / FOOTER */}
              <div className="mt-auto pointer-events-none">
                {p.image && (
                  <div className="relative w-full h-32 rounded-2xl overflow-hidden grayscale brightness-110 mb-3 group-hover:grayscale-0 transition-all duration-500">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={14} className="text-black" />
                    </div>
                  </div>
                )}

                {p.footer && (
                  <div className="flex justify-between items-center">
                    <span className="text-white font-black tracking-tighter text-xl uppercase">{p.footer}</span>
                    <ArrowUpRight className="text-zinc-700" size={20} />
                  </div>
                )}

                {p.author && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden relative grayscale">
                        <Image src={p.authorImg!} alt={p.author} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-black leading-tight">{p.author}</span>
                        <span className="text-xs text-zinc-400 font-medium">{p.role}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="text-zinc-400 group-hover:text-black transition-colors" size={20} />
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* GUIDELINE FOOTER NOTE */}
        <div className="mt-10 flex items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
           <span>Click to view live site</span>
           <div className="h-1 w-1 rounded-full bg-zinc-300" />
           <span>Grayscale Imagery only</span>
           <div className="h-1 w-1 rounded-full bg-zinc-300" />
           <span>Rules: Max 2 bold groups</span>
        </div>
      </div>
    </section>
  );
}