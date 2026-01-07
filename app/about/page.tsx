"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Code2, Terminal, Layout, Sparkles, Target, Zap } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "AI Integration", level: 80 },
    { name: "UI/UX Design", level: 88 },
    { name: "System Architecture", level: 87 },
  ];

  const values = [
    {
      icon: <Target size={24} />,
      title: "Precision First",
      description: "Every line of code is intentional, every design decision is deliberate."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Driven",
      description: "Building fast, scalable solutions that don't compromise on user experience."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Innovation Focused",
      description: "Leveraging AI and modern tech to solve real business problems."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-4 block">
              About Me
            </span>
            <h1 className="text-5xl font-bold tracking-tighter text-black sm:text-6xl lg:text-7xl mb-6">
              Building Digital <span className="text-zinc-300 italic font-light">Experiences</span>
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 max-w-2xl">
              I&apos;m a Product Developer specializing in web platforms and AI solutions for small-scale businesses and B2C products. 
              I combine technical expertise with minimalist design principles to create high-performance digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative w-full bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex flex-col items-center gap-3"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-400">
                Personal Philosophy
              </span>
              <div className="h-8 w-px bg-zinc-200" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-medium leading-[1.2] tracking-tighter text-zinc-950 md:text-3xl lg:text-4xl text-center"
            >
              I am a creative developer operating at the intersection of high-performance code and minimalist design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative w-full bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-4 block">
              Core Values
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl">
              What Drives <span className="text-zinc-300 italic font-light">Me</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-500 hover:border-zinc-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-white transition-transform duration-500 group-hover:rotate-[360deg]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {value.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-black transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative w-full bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-4 block">
              Technical Expertise
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl">
              Skills & <span className="text-zinc-300 italic font-light">Proficiency</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-zinc-900">{skill.name}</span>
                  <span className="text-xs font-bold text-zinc-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-black rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-4 block">
              What I Do
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl">
              Services & <span className="text-zinc-300 italic font-light">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 size={32} />,
                title: "Frontend Engineering",
                description: "Building high-performance, pixel-perfect interfaces with React, Next.js, and modern web technologies."
              },
              {
                icon: <Terminal size={32} />,
                title: "Backend Development",
                description: "Designing scalable APIs and server architectures with Node.js, focusing on performance and reliability."
              },
              {
                icon: <Layout size={32} />,
                title: "AI Integration",
                description: "Implementing AI solutions for small businesses and B2C products to enhance user experiences and automate workflows."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-500 hover:border-zinc-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 text-white transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-black transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-zinc-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl mb-6">
              Let&rsquo;s Build Something <span className="text-zinc-600 italic font-light">Together</span>
            </h2>
            <p className="text-lg leading-relaxed text-zinc-400 mb-8">
              Interested in working together? I&apos;m always open to discussing new projects and opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
