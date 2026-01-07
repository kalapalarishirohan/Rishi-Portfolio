"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
  {
    id: "01",
    year: "2025",
    title: "Aura Architecture",
    category: "Design Systems",
    description: "High-performance interface for global architectural standards.",
    longDescription: "A comprehensive design system and web platform built for a global architecture firm. The project involved creating a scalable component library, implementing advanced data visualization, and optimizing for performance across multiple devices.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tech: ["React", "Next.js", "TypeScript", "Framer Motion"],
    link: "#",
    github: "#"
  },
  {
    id: "02",
    year: "2024",
    title: "Farmora",
    category: "AgTech SaaS",
    description: "Precision IoT management for modern agriculture.",
    longDescription: "An IoT-powered SaaS platform for precision agriculture management. Built with real-time data processing, AI-powered insights, and a mobile-first approach to help farmers optimize their operations.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2574&auto=format&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "IoT Integration"],
    link: "#",
    github: "#"
  },
  {
    id: "03",
    year: "2024",
    title: "Nexus OS",
    category: "Technical",
    description: "Cloud-native system analytics.",
    longDescription: "A cloud-native analytics platform for system monitoring and performance optimization. Features real-time dashboards, automated alerting, and predictive analytics powered by machine learning.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    tech: ["Next.js", "Python", "TensorFlow", "AWS"],
    link: "#",
    github: "#"
  },
  {
    id: "04",
    year: "2024",
    title: "Symmetry Engine",
    category: "Experience",
    description: "Node-based AI workflows.",
    longDescription: "A visual workflow builder for creating AI-powered automation pipelines. Enables users to design complex workflows through an intuitive node-based interface, with support for multiple AI models and integrations.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
    tech: ["React", "Node.js", "OpenAI API", "WebSockets"],
    link: "#",
    github: "#"
  }
];

const otherProjects = [
  {
    title: "E-Commerce Platform",
    category: "B2C Product",
    description: "Full-stack e-commerce solution for small businesses",
    tech: ["Next.js", "Stripe", "PostgreSQL"]
  },
  {
    title: "AI Chat Assistant",
    category: "AI Integration",
    description: "Custom AI assistant for customer support automation",
    tech: ["React", "OpenAI", "Node.js"]
  },
  {
    title: "Analytics Dashboard",
    category: "SaaS",
    description: "Real-time analytics and reporting platform",
    tech: ["React", "D3.js", "Python"]
  }
];

export default function WorkPage() {
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
            <div className="flex items-center gap-3 mb-4">
              <Plus size={12} className="text-black" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-black">
                Portfolio
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter text-black sm:text-6xl lg:text-7xl mb-6">
              Featured <span className="text-zinc-300 italic font-light">Work</span>
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 max-w-2xl">
              A collection of projects showcasing web platforms, AI integrations, and digital experiences 
              built for small-scale businesses and B2C products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="relative w-full bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-zinc-100 bg-white transition-all duration-500 hover:border-zinc-300 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-black">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-[9px] font-bold text-zinc-400 mb-2">
                        <span>{project.id}</span>
                        <span className="text-zinc-200">&#47;&#47;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tighter text-black lg:text-3xl mb-3">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white transition-all duration-500 group-hover:bg-black group-hover:scale-110">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-500 mb-6">
                    {project.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-medium text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Project
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute inset-x-0 bottom-0 h-1.5 w-0 bg-black transition-all duration-700 ease-out group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="relative w-full bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-4 block">
              Additional Work
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl">
              More <span className="text-zinc-300 italic font-light">Projects</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-500 hover:border-zinc-300 hover:shadow-xl"
              >
                <div className="mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-[9px] font-medium text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
              Have a Project in <span className="text-zinc-600 italic font-light">Mind?</span>
            </h2>
            <p className="text-lg leading-relaxed text-zinc-400 mb-8">
              Let&rsquo;s discuss how we can bring your vision to life with precision and performance.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
