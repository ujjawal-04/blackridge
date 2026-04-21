"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      {/* Big radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.13) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative glass-card border border-white/[0.08] p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 60%)",
            }}
          />

          {/* Decorative orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 to-violet-600/30 blur-3xl pointer-events-none" />

          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-5">
              Let&apos;s Talk
            </p>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
              Ready to build something{" "}
              <span className="gradient-text">exceptional?</span>
            </h2>

            <p className="text-slate-400 max-w-lg mx-auto text-base leading-relaxed mb-10">
              Share your idea — no obligations, no sales pitch. Just an honest
              conversation about how we can help you ship something great.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:info@blackridge.co.in"
                whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-2xl shadow-violet-500/30 transition-shadow duration-300 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="mailto:info@blackridge.co.in"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-medium text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <CalendarDays className="w-4 h-4" />
                Book a 30-min Call
              </motion.a>
            </div>

            {/* Reassurance text */}
            <p className="mt-8 text-xs text-slate-600">
              Typically respond within 4 hours · No commitments until you&apos;re ready
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
