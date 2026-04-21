"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Modal } from '@/components/ui/Modal';

const projects = [
  {
    id: 1,
    title: "Haven Digital",
    description: "A premium luxury real estate and lifestyle platform featuring high-fidelity architectural visualization and seamless user flows.",
    image: "/Haven.PNG",
    tags: ["REACT", "FRAMER", "VITE"],
    link: "#"
  },
  {
    id: 2,
    title: "Lexalyze Analytics",
    description: "Advanced linguistic analysis engine capable of processing complex datasets for legal and research documentation.",
    image: "/lexalyze.PNG",
    tags: ["NEXT.JS", "PYTHON", "AI"],
    link: "#"
  },
  {
    id: 3,
    title: "Medusa Bot Engine",
    description: "Automated e-commerce interaction layer built on top of Medusa.js for headless commerce automation.",
    image: "/medusa bot.PNG",
    tags: ["MEDUSA", "NODE.JS", "REDIS"],
    link: "#"
  },
  {
    id: 4,
    title: "Webyrix Systems",
    description: "Next-generation web development studio platform focused on high-performance creative engineering and visual density.",
    image: "/webyrix.PNG",
    tags: ["TYPESCRIPT", "TAILWIND", "GSAP"],
    link: "#"
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  return (
    <div className="bg-bg text-foreground min-h-screen selection:bg-blue-500/30 overflow-hidden relative">
      <div className="noise" />
      <Navbar />

      <main className="pt-28 md:pt-40 pb-20 md:pb-32 max-w-7xl mx-auto px-5 md:px-6">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 mb-14 md:mb-24 lg:mb-32 items-end">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-blue-500" />
              <span className="mono text-[10px] font-semibold text-blue-400 uppercase tracking-[0.4em]">Project_Archives</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter uppercase"
            >
              SELECTED <br /> <span className="text-blue-400 italic">WORK</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-foreground/50 leading-relaxed max-w-xl font-light italic border-l border-border pl-8"
          >
            A selection of systems and platforms we’ve designed and built for modern businesses.
          </motion.p>
        </div>
        <div className="space-y-8 lg:space-y-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="industrial-card bg-surface-low/40 border-border/30 backdrop-blur-xl p-5 md:p-7 lg:p-8 transition-all duration-500 hover:border-blue-500/40 hover:bg-surface-low/80">
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
                  <div className="space-y-6 lg:col-span-7">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="mono text-[9px] text-blue-400 uppercase tracking-widest border border-blue-500/20 bg-blue-500/5 px-2 py-1 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-end justify-between gap-4 border-b border-border/50 pb-4">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="shrink-0 text-foreground/20 group-hover:text-blue-400 transition-all">
                          <ArrowRight size={26} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                        </div>
                      </div>

                      <p className="text-foreground/60 font-light text-base md:text-lg leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>


                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border border-border/50 bg-[#050505]">
                      <Image 
                        src={project.image} 
                        fill
                        alt={project.title} 
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      {/* <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.45)]" />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" /> */}

                      <div className="absolute top-4 left-4 mono text-[8px] bg-bg/80 backdrop-blur-md border border-border px-3 py-1 text-foreground/40 uppercase tracking-widest">
                        P_TAG // 0{project.id}
                      </div>

                      <div className="absolute bottom-4 right-4 mono text-[8px] text-blue-300/70 uppercase tracking-widest border border-blue-500/30 bg-black/40 px-3 py-1">
                        VIEW_CASE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        type="detail"
        confirmLabel="CLOSE_ARCHIVE"
      >
        {selectedProject && (
          <div className="space-y-12">
            {/* Full Image */}
            <div className="relative w-full aspect-[16/9] bg-black overflow-hidden border border-border/50 shadow-2xl">
              <Image 
                src={selectedProject.image} 
                fill 
                alt={selectedProject.title} 
                className="object-cover"
              />
              {/* <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" /> */}
            </div>

            {/* Structured Content */}
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 border-b border-border pb-12">
                <div className="space-y-6">
                  <h4 className="mono text-[10px] text-blue-400 uppercase tracking-widest border-l-2 border-blue-500 pl-4">System_Brief</h4>
                  <p className="text-2xl text-foreground font-light leading-snug">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="mono text-[10px] text-foreground/30 uppercase tracking-widest border-l-2 border-border pl-4">Tech_Inventory</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="mono text-[9px] border border-border/50 px-4 py-2 bg-white/5 uppercase tracking-tighter hover:border-blue-500 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Diagnostics Section */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="space-y-2 p-4 border border-border/20 bg-white/2">
                   <p className="mono text-[8px] text-foreground/20 uppercase">Deployment_Period</p>
                   <p className="mono text-[10px] text-foreground/60 tracking-wider">MARCH_2026 // 04:00</p>
                </div>
                <div className="space-y-2 p-4 border border-border/20 bg-white/2">
                   <p className="mono text-[8px] text-foreground/20 uppercase">Infrastructure</p>
                   <p className="mono text-[10px] text-foreground/60 tracking-wider">EDGE_DISTRIBUTED</p>
                </div>
                <div className="space-y-2 p-4 border border-border/20 bg-white/2">
                   <p className="mono text-[8px] text-foreground/20 uppercase">Core_Logic</p>
                   <p className="mono text-[10px] text-foreground/60 tracking-wider">TS_v5.4 / RUST_CORE</p>
                </div>
                <div className="space-y-2 p-4 border border-border/20 bg-white/2">
                   <p className="mono text-[8px] text-foreground/20 uppercase">Sync_State</p>
                   <p className="mono text-[10px] text-blue-400 tracking-wider">VERIFIED_SECURE</p>
                </div>
              </div>

              {/* Log Stream Decorator */}
              <div className="card-border bg-[#050505] p-6 mono text-[9px] text-foreground/30 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                <div className="absolute top-0 right-0 p-4 font-bold text-blue-500/20">LOG_v4.2</div>
                <div className="space-y-1">
                  <p className="text-blue-500/40">{">"} INITIALIZING_SYBSYSTEM_READ_0xFA92</p>
                  <p>{">"} PACKET_INTEGRITY_CHECK: [ OK ]</p>
                  <p>{">"} LOADING_ARCHITECTURE_MAPPING...</p>
                  <p>{">"} RENDERING_TECHNICAL_PAYLOAD_READY</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  );
}
