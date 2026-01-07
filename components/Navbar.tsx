"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
] as const;

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-12 z-[100] flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-black/80 p-1.5 shadow-2xl backdrop-blur-xl"
      >
        {/* Minimal Name */}
        <Link href="/" className="pl-4 pr-2 text-sm font-bold tracking-tighter text-white">
          RISHI
        </Link>

        {/* Vertical Divider */}
        <div className="h-4 w-px bg-white/10" />

        {/* Essential Links - Hidden on very small screens to stay "Short" */}
        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[11px] font-medium text-neutral-400 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Minimal High-Contrast CTA */}
        <a
          href="#contact"
          className="group flex items-center gap-1 rounded-full bg-white px-4 py-2 text-[11px] font-bold text-black transition-all hover:bg-neutral-200"
        >
          <span>Hire</span>
          <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.nav>
    </header>
  );
}