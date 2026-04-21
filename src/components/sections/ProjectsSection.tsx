"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinTrack Pro",
    category: "FinTech · Web App",
    description:
      "A real-time personal finance dashboard with AI-powered spend categorization and predictive budgeting.",
    tags: ["Next.js", "PostgreSQL", "OpenAI"],
    accentColor: "from-blue-600/30 to-cyan-500/20",
    borderHover: "hover:border-blue-500/30",
    textAccent: "text-blue-400",
    size: "lg",
  },
  {
    title: "MedConnect",
    category: "HealthTech · Mobile",
    description:
      "Patient-to-doctor video consultation platform with HIPAA-compliant data handling.",
    tags: ["React Native", "Node.js", "AWS"],
    accentColor: "from-violet-600/30 to-purple-400/20",
    borderHover: "hover:border-violet-500/30",
    textAccent: "text-violet-400",
    size: "sm",
  },
  {
    title: "ShipLogix",
    category: "Logistics · SaaS",
    description:
      "End-to-end shipment tracking and fleet management for mid-size logistics companies.",
    tags: ["Vue.js", "GraphQL", "GCP"],
    accentColor: "from-emerald-600/30 to-teal-400/20",
    borderHover: "hover:border-emerald-500/30",
    textAccent: "text-emerald-400",
    size: "sm",
  },
  {
    title: "Orbis CMS",
    category: "Enterprise · Platform",
    description:
      "Headless CMS with multi-tenant support, custom workflows, and a pixel-perfect publishing editor.",
    tags: ["React", "TypeScript", "Redis"],
    accentColor: "from-pink-600/30 to-rose-400/20",
    borderHover: "hover:border-pink-500/30",
    textAccent: "text-pink-400",
    size: "lg",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className={`group relative glass-card overflow-hidden border border-white/[0.07] ${project.borderHover} transition-all duration-300 cursor-pointer flex flex-col h-full`}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Thumbnail Placeholder */}
      <div
        className={`relative w-full h-40 bg-gradient-to-br ${project.accentColor} opacity-60 group-hover:opacity-80 transition-opacity`}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-4xl font-medium ${project.textAccent} opacity-20 group-hover:opacity-40 transition-opacity select-none`}>
            {project.title.charAt(0)}
          </span>
        </div>
      </div>

      <div className="relative p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className={`text-[11px] font-medium uppercase tracking-wider ${project.textAccent} mb-1`}>
              {project.category}
            </p>
            <h3 className="text-lg font-light text-white leading-tight">
              {project.title}
            </h3>
          </div>
          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
            className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center group-hover:border-white/20 transition-colors"
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
          </motion.div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-light text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Built with{" "}
              <span className="gradient-text">intention</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
            A curated selection of products we&apos;ve shipped across industries and
            scales.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large card spanning 2 cols */}
          <div className="lg:col-span-2">
            <ProjectCard project={projects[0]} index={0} />
          </div>
          <div>
            <ProjectCard project={projects[1]} index={1} />
          </div>
          <div>
            <ProjectCard project={projects[2]} index={2} />
          </div>
          <div className="lg:col-span-2">
            <ProjectCard project={projects[3]} index={3} />
          </div>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-light text-slate-400 hover:text-white transition-colors group"
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
