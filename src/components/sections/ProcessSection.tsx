"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description:
      "We kick off with deep-dive sessions to map your business goals, technical constraints, and user needs into a clear product roadmap.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/10",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design & Prototype",
    description:
      "Our design team delivers high-fidelity Figma prototypes. You see every screen before a single line of production code is written.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "shadow-violet-500/10",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & Iterate",
    description:
      "Agile sprints with frequent demos. Your feedback is folded in continuously so there are no surprises at launch.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    glow: "shadow-pink-500/10",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We handle deployment, monitoring, and post-launch support so you can focus on growing — not firefighting.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "shadow-emerald-500/10",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-28 md:py-36 overflow-hidden">
      {/* Divider glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            A process built for{" "}
            <span className="gradient-text">clarity</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            No black boxes. Just a reliable, transparent process that keeps
            you informed and in control from day one.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  {/* Icon orb */}
                  <div className="relative mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center shadow-lg ${step.glow} group-hover:scale-110 transition-all`}
                    >
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-medium text-slate-600 border border-white/[0.06] bg-[#0B0F19] rounded-full px-1.5 py-0.5">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 text-sm italic max-w-md mx-auto">
            &quot;The average project goes from kickoff to launch in{" "}
            <span className="text-white not-italic font-medium">
              8–12 weeks
            </span>
            , with weekly check-ins throughout.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
