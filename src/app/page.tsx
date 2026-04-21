"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Hero } from '@/components/hero/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { SystemFeatureGrid } from '@/components/sections/SystemFeatureGrid';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="bg-bg text-foreground selection:bg-blue-500/30 w-full overflow-hidden relative min-h-screen">
      <div className="noise" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BentoGrid />
        {/* <SystemFeatureGrid /> */}
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
