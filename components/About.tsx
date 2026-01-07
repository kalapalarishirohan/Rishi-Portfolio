"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface WordProps {
  word: string;
  index: number;
  totalWords: number;
  scrollProgress: MotionValue<number>;
}

function Word({ word, index, totalWords, scrollProgress }: WordProps) {
  // Calculate word reveal timing - words reveal sequentially as you scroll
  // Each word gets a portion of the scroll progress
  const wordStart = (index / totalWords) * 0.8; // Start revealing earlier
  const wordEnd = ((index + 1) / totalWords) * 0.8 + 0.2; // End with some overlap
  
  const opacity = useTransform(
    scrollProgress, 
    [wordStart, wordEnd], 
    [0.2, 1]
  );
  
  const color = useTransform(
    scrollProgress, 
    [wordStart, wordEnd], 
    ["#e4e4e7", "#09090b"] // zinc-200 to zinc-950
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mx-[0.12em]"
    >
      {word}
    </motion.span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.3"], 
  });

  const text = "I am a creative developer operating at the intersection of high-performance code and minimalist design.";

  const words = text.split(" ");

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-zinc-50 py-12 sm:py-16 lg:py-20 selection:bg-black selection:text-white"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Centered Label */}
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center gap-3"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-400">
              Personal Philosophy
            </span>
            <div className="h-8 w-px bg-zinc-200" />
          </motion.div>

          {/* Centered Paragraph */}
          <div className="w-full">
            <h2 className="text-[1.35rem] font-medium leading-[1.2] tracking-tighter text-zinc-950 md:text-[2.2rem] lg:text-[3.2vw]">
              {words.map((word, index) => (
                <Word
                  key={index}
                  word={word}
                  index={index}
                  totalWords={words.length}
                  scrollProgress={scrollYProgress}
                />
              ))}
            </h2>
          </div>
          
        </div>
      </div>
    </section>
  );
}