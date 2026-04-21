"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Devz didn't just build our product — they helped us think through the entire architecture. We launched 2 weeks early and the code quality is exceptional.",
    name: "Sarah Chen",
    title: "CTO, FinTrack Pro",
    initials: "SC",
    color: "#60A5FA",
  },
  {
    quote:
      "I've worked with 6 dev agencies over 10 years. Devz is the first that felt like a true partner — they pushed back when we were wrong, and that saved us.",
    name: "Marcus Webb",
    title: "Founder, MedConnect",
    initials: "MW",
    color: "#A78BFA",
  },
  {
    quote:
      "Fast, clean, communicative, and the design instincts are top-notch. Our app has a 4.9-star rating and users always comment on how polished it feels.",
    name: "Priya Nair",
    title: "Head of Product, ShipLogix",
    initials: "PN",
    color: "#34D399",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Diffuse background */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Don&apos;t take our{" "}
            <span className="gradient-text">word for it</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="glass-card p-7 flex flex-col gap-5 border border-white/[0.07]"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-5 h-5 text-slate-700" />
                <p className="text-slate-300 text-sm leading-relaxed pl-4 italic">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium text-white flex-shrink-0"
                  style={{
                    backgroundColor: t.color + "30",
                    border: `1px solid ${t.color}50`,
                    color: t.color,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                   <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-[11px] text-slate-500">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
