"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import DeviceShowcase from './DeviceShowcase';

// DeviceShowcase is used instead of BlackRidgeTerminal

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Skip on mobile — there's no cursor, and the flare/grid-bg are hidden via CSS
    const isMobile = window.matchMedia('(max-width: 1023px)').matches;
    if (isMobile) return;

    let rafId = 0;
    const handleMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--y', `${e.clientY}px`);
      });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg z-0" />
      <div className="flare" />

      <div className="relative z-10 max-w-[90rem] w-full mt-10 pt-20 sm:pt-32 md:pt-40 lg:pt-0">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-[11vw] sm:text-7xl md:text-8xl lg:text-[7vw] xl:text-[8vw] font-light leading-[0.9] md:leading-[0.8] tracking-tighter uppercase">
              ENGINEERING
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-grad-start)] via-[var(--text-grad-mid)] to-[var(--text-grad-end)] italic ml-0 sm:ml-[-1vw] whitespace-normal sm:whitespace-nowrap">SCALABLE DIGITAL
              </span> <br />
              SYSTEMS.
            </h1>

            <p className="text-lg md:text-2xl text-foreground/50 leading-snug md:leading-tight font-light max-w-2xl mx-auto lg:mx-0">
              We design and build high-performance web platforms, AI solutions,
              and eCommerce systems that scale with your business needs.
              <br className="hidden md:block" />Zero lag. Infinite scale. Total control.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="https://cal.com/black-ridge"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Request Quote
              </Link>
              <Link href="/about" className="mono text-[10px] font-medium tracking-widest uppercase border border-border px-8 py-4 hover:bg-foreground hover:text-bg transition-all w-full sm:w-auto text-center">
                Learn More
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end xl:pr-10">
            <DeviceShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};
