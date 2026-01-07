"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: "DEPL_01",
    quote: "Architecting global reach for our media stories was easy with this platform. It handles massive scale effortlessly.",
    author: "Harshith Sai Tunuguntla",
    role: "Stories at Scale",
    image: "https://i.ibb.co/C5RFL9L1/Screenshot-2026-01-07-at-23-46-11.png",
  },
  {
    id: "DEPL_02",
    quote: "The enterprise solutions gave us the scalable architecture we needed. Our daily operations are now seamless.",
    author: "Jaswanth Sonti",
    role: "Forge Digital Technologies",
    image: "https://i.ibb.co/DfCzFScV/IMG-5991.jpg",
  },
  {
    id: "DEPL_03",
    quote: "Our high-conversion store looks beautiful on mobile. The UX refinement made a huge difference in sales.",
    author: "Bala Murali Krishna Kotte",
    role: "Siya Jewels | E-Commerce Client",
    image: "https://i.ibb.co/pjyNVk4h/Generated-Image-January-07-2026-11-15-PM.png",
  },
  {
    id: "DEPL_04",
    quote: "The management ecosystem transformed our academic data handling. It is truly digital-first and efficient.",
    author: "NSS CMRIT",
    role: "Education Management",
    image: "https://www.peacockride.com/cdn/shop/products/NSS_hindi_1024x1024.png?v=1573125727", // Using your provided ImgBB link
  },
  {
    id: "DEPL_05",
    quote: "The academic portal is better organized and much easier for students to access. It's a game-changer for us.",
    author: "HSGA CMRIT",
    role: "Education Portal",
    image: "https://i.ytimg.com/vi/003Btczc4rE/sddefault.jpg",
  },
  {
    id: "DEPL_06",
    quote: "Our new digital platform significantly improved our brand visibility. The brand core is stronger than ever.",
    author: "Dhanush Reddy Marivada",
    role: "Marketing Platform | Dhasha Media",
    image: "https://dhanushh12.netlify.app/lovable-uploads/8840dc96-84cb-4c04-8605-2a74f585b88b.png",
  }
];

export default function ProjectEditorialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#fdfdfd] py-16 px-6 md:px-12 font-sans selection:bg-black selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER METADATA */}
        <div className="mb-10 flex justify-between items-center border-b border-zinc-100 pb-5">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-300">Client Feedback // Project Archive</span>
            <h2 className="text-xl font-medium italic text-zinc-800 mt-1">Voices of the deployment</h2>
          </div>
          <div className="flex gap-4">
            <button onClick={() => scroll("left")} className="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:text-black hover:border-black transition-all">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll("right")} className="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:text-black hover:border-black transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 2-CARD BATCH SLIDER */}
        <div 
          ref={scrollRef}
          className="flex gap-12 md:gap-16 lg:gap-24 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-start min-w-full md:min-w-[calc(50%-2rem)] lg:min-w-[calc(50%-4rem)] flex flex-col items-start relative group"
            >
              {/* QUOTE TEXT */}
              <div className="ml-[25%] mb-[-15px] z-10 relative">
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-[1.1] tracking-tight text-zinc-900">
                  “{t.quote}”
                </blockquote>
              </div>

              {/* VISUAL CORE */}
              <div className="relative flex items-end w-full mt-4">
                {/* Structural Quote Icon */}
                <div className="w-[50%] text-black shrink-0 transition-transform duration-700 group-hover:translate-x-2">
                  <svg viewBox="0 0 100 100" className="w-full fill-current">
                    <path d="M40,30 C40,50 30,70 10,85 L10,75 C25,65 30,50 30,40 L15,40 L15,15 L45,15 L45,30 Z M90,30 C90,50 80,70 60,85 L60,75 C75,65 80,50 80,40 L65,40 L65,15 L95,15 L95,30 Z" />
                  </svg>
                </div>

                {/* Grayscale Client Image */}
                <div className="relative w-[35%] aspect-square ml-[-8%] z-20 border border-zinc-100 shadow-xl overflow-hidden bg-zinc-50">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-zinc-100 to-zinc-200" />
                  )}
                </div>
              </div>

              {/* AUTHOR / PROJECT INFO */}
              <div className="ml-[45%] mt-4 flex flex-col">
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-black text-zinc-300 tracking-tighter">{t.id}</span>
                   <span className="text-base font-bold text-zinc-900 tracking-tight">{t.author}</span>
                </div>
                <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mt-0.5">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM METADATA */}
        <div className="mt-12 flex items-center justify-between border-t border-zinc-100 pt-8 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-300">
          <div className="flex gap-8">
            <span>© 2026 Archive</span>
            <span>Ref: 0032_Testimonial</span>
          </div>
          <span>Total Deployments: 0{testimonials.length}</span>
        </div>
      </div>
    </section>
  );
}
