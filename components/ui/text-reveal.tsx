"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  onScrollAnimation?: boolean;
  delay?: number;
}

export default function TextReveal({ 
  children, 
  onScrollAnimation = true,
  delay = 0 
}: TextRevealProps) {
  if (!onScrollAnimation) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

