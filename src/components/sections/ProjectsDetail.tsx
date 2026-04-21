"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Haven Digital",
    description: "A premium luxury real estate and lifestyle platform featuring architectural visualization.",
    image: "/Haven.PNG",
    tags: ["REACT", "FRAMER", "VITE"],
    link: "/projects"
  },
  {
    id: 3,
    title: "Medusa Bot Engine",
    description: "Automated e-commerce interaction layer built on top of Medusa.js.",
    image: "/medusa bot.PNG",
    tags: ["MEDUSA", "NODE.JS", "REDIS"],
    link: "/projects"
  }
];

export const ProjectsDetail = () => {
  return (
    <div className="py-10 md:py-14">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-6">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase">SELECTED <span className="text-blue-400 italic">WORK</span></h2>
          <p className="text-foreground/50 max-w-xl font-light text-lg">A selection of systems and platforms we’ve designed and built for modern businesses.</p>
        </div>
        <Link href="/projects" className="btn-os inline-flex items-center gap-2 text-xs">
          <Terminal size={14} /> View All Projects
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4 + idx * 0.2, ease: [0.65, 0, 0.35, 1] }}
            className="group"
          >
            <div className="industrial-card p-2 md:p-3 bg-foreground/5 backdrop-blur-xl mb-6 transition-colors duration-500 hover:bg-foreground/10">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-black">
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="space-y-4 px-2">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="mono text-[9px] text-blue-400 uppercase tracking-widest border border-blue-500/20 bg-blue-500/5 px-2 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-light uppercase tracking-tighter group-hover:text-blue-400 transition-colors mb-2">{project.title}</h3>
                <p className="text-foreground/50 font-light text-sm line-clamp-2">{project.description}</p>
              </div>

              <a href={project.link} className="inline-flex items-center gap-2 mono text-[10px] text-foreground uppercase tracking-widest group-hover:text-blue-400 transition-colors pt-2 border-b border-transparent group-hover:border-blue-400 pb-1">
                Initialize_View <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
