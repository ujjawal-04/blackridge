"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, Shield, Layers } from "lucide-react";

// ─── Floating UI Card ─────────────────────────────────────────
function FloatingCard({
  className,
  delay = 0,
  children,
  style,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-card p-4 shadow-2xl shadow-black/40 ${className}`}
      style={{
        ...style,
        animation: `float ${6 + delay}s ease-in-out ${delay}s infinite`,
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated Badge ───────────────────────────────────────────
function Badge({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-6"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 pulse-glow" />
      {text}
    </motion.div>
  );
}

// ─── Text variants ────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Hero Visual ──────────────────────────────────────────────
function HeroVisual() {
  return (
    <div className="relative w-full h-[420px] md:h-[580px] flex items-center justify-center">
      {/* Ambient glow blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 60% 50%, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Main dashboard card */}
      <FloatingCard
        delay={0.3}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-80"
      >
        {/* Mini Header */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/[0.06]">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
            <Layers className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-semibold text-white">Project Dashboard</span>
          <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
            Live
          </span>
        </div>

        {/* Progress bars */}
        <div className="space-y-2.5">
          {[
            { label: "Frontend", pct: 92, color: "from-blue-500 to-cyan-400" },
            { label: "Backend API", pct: 78, color: "from-violet-500 to-purple-400" },
            { label: "Deployment", pct: 65, color: "from-pink-500 to-rose-400" },
          ].map((item, i) => (
            <div key={item.label}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] text-slate-400 font-medium">{item.label}</span>
                <span className="text-[11px] text-white font-semibold">{item.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ duration: 1.2, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Sprint info */}
        <div className="mt-3 pt-3 border-t border-white/[0.06] flex justify-between">
          <span className="text-[11px] text-slate-500">Sprint 4 of 6</span>
          <span className="text-[11px] text-white font-medium">On track ✓</span>
        </div>
      </FloatingCard>

      {/* Stats card — top right */}
      <FloatingCard
        delay={0.5}
        className="absolute top-4 right-0 md:right-2 w-44"
        style={{ animationDelay: "1s" } as React.CSSProperties}
      >
        <div className="flex items-start gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-medium">Uptime</p>
            <p className="text-lg font-bold text-white leading-tight">99.98%</p>
            <p className="text-[10px] text-emerald-400 font-medium">↑ +0.3% this month</p>
          </div>
        </div>
      </FloatingCard>

      {/* Tech stack card — bottom left */}
      <FloatingCard
        delay={0.6}
        className="absolute bottom-8 left-0 md:-left-4 w-52"
      >
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["React", "Next.js", "Node", "PostgreSQL", "AWS"].map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.06] text-[10px] text-slate-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </FloatingCard>

      {/* Security badge — top left */}
      <FloatingCard
        delay={0.7}
        className="absolute top-12 left-0 md:-left-6 w-44"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Shield className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white">Enterprise Grade</p>
            <p className="text-[10px] text-slate-500">SOC 2 Compliant</p>
          </div>
        </div>
      </FloatingCard>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.3), transparent 70%)",
        }}
      />
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-20">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(139,92,246,0.15) 0%, transparent 60%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #0B0F19)",
        }}
      />

      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 py-20 lg:py-32">
          {/* ─ Left ─ */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={textVariant}>
              <Badge text="Available for new projects" />
            </motion.div>

            <motion.h1
              variants={textVariant}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
            >
              We Build Software{" "}
              <span className="gradient-text block sm:inline">
                That Fits Your
              </span>{" "}
              Business
            </motion.h1>

            <motion.p
              variants={textVariant}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mb-10"
            >
              From idea to deployment — we craft custom web apps, mobile
              products, and AI-powered platforms that solve real problems
              and scale with your growth.
            </motion.p>

            <motion.div
              variants={textVariant}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(139,92,246,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-violet-500/20 transition-shadow duration-300 w-full sm:w-auto justify-center"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 w-full sm:w-auto justify-center"
              >
                View Work
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={textVariant}
              className="mt-12 flex items-center gap-5"
            >
              <div className="flex -space-x-2">
                {["#60A5FA", "#A78BFA", "#34D399", "#F472B6", "#FBBF24"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0B0F19] flex items-center justify-center text-white text-[9px] font-bold"
                      style={{ backgroundColor: color + "40", borderColor: color + "60" }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  )
                )}
              </div>
              <div>
                <p className="text-sm text-white font-semibold">50+ projects delivered</p>
                <p className="text-xs text-slate-500">Trusted by growing startups</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ─ Right ─ */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
