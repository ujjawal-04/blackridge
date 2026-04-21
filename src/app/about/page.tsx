"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import AboutTabletShowcase from '@/components/sections/AboutTabletShowcase';

export default function AboutPage() {
  return (
    <div className="bg-bg text-foreground selection:bg-blue-500/30 w-full overflow-hidden relative min-h-screen">
      <div className="noise" />
      <Navbar />

      <main className="pt-40">
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="mono text-[10px] text-blue-400 uppercase tracking-[0.3em] mb-8">
                  Engineering_The_Future / Collective
                </p>
                <h1 className="text-7xl md:text-9xl font-light tracking-tighter uppercase leading-[0.85] mb-12">
                  WE BUILD <br /> <span className="text-blue-400 italic">SYSTEMS</span> <br /> OF POWER.
                </h1>
                <p className="text-xl md:text-3xl text-foreground/60 font-light leading-relaxed max-w-2xl">
                  BlackRidge is a specialized engineering collective focused on
                  building the high-performance infrastructure that
                  powers high-convexity teams.
                </p>
              </motion.div>
              <div className="ml-0 lg:ml-5 lg:mt-8">
                <AboutTabletShowcase />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-20 items-start mb-40">
              <div>
                <h2 className="text-3xl font-medium uppercase tracking-tighter mb-6">Our DNA</h2>
                <p className="text-foreground/50 text-lg leading-relaxed">
                  We don&apos;t believe in generic solutions. Every line of code is
                  engineered for a specific outcome. We prioritize speed,
                  security, and scalability above all else. Our approach is
                  founded on the principles of distributed systems and
                  low-latency performance.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-medium uppercase tracking-tighter mb-6">Execution</h2>
                <p className="text-foreground/50 text-lg leading-relaxed">
                  Based in India and operating globally, we bridge the gap
                  between complex technical requirements and stunning
                  user interfaces. Our team consists of engineers,
                  designers, and problem solvers who thrive on
                  &quot;impossible&quot; challenges.
                </p>
              </div>


            </div>

            {/* Principles Section */}
            <div className="border-t border-border pt-32">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <div className="w-10 h-10 bg-blue-400/10 border border-blue-400/20 flex items-center justify-center mono text-blue-400 text-xs">01</div>
                  <h3 className="text-2xl font-medium uppercase tracking-tighter">Radical Performance</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">
                    Speed is not a feature; it&apos;s a requirement. We optimize for every millisecond.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="w-10 h-10 bg-blue-400/10 border border-blue-400/20 flex items-center justify-center mono text-blue-400 text-xs">02</div>
                  <h3 className="text-2xl font-medium uppercase tracking-tighter">Obsessive Detail</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">
                    We believe the small things are the big things. Micro-interactions and pixel perfection.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="w-10 h-10 bg-blue-400/10 border border-blue-400/20 flex items-center justify-center mono text-blue-400 text-xs">03</div>
                  <h3 className="text-2xl font-medium uppercase tracking-tighter">Total Control</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">
                    Custom infrastructure. No black boxes. We give you full visibility and ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
