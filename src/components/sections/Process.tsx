"use client";

import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiscoveryDetail } from '@/components/sections/DiscoveryDetail';
import { ProjectsDetail } from '@/components/sections/ProjectsDetail';
import { EngineeringDetail } from '@/components/sections/EngineeringDetail';
import { FaqDetail } from '@/components/sections/FaqDetail';

export const Process = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const steps = ["Discovery", "Our Projects", "Engineering", "FAQs"];
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (i: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveStep(i);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  return (
    <section id="lab" className="py-32 bg-bg border-y border-border relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step}>
              <div
                onClick={() => {
                  if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                  setActiveStep(activeStep === i ? -1 : i);
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                className="group flex items-center justify-between border-b border-border py-8 md:py-12 cursor-pointer gap-4 transition-all duration-[1200ms]"
              >
                <div className="flex items-center gap-4 md:gap-12 overflow-hidden">
                  <span className="mono text-foreground/30 text-lg md:text-xl font-medium shrink-0">0{i + 1}</span>
                  <h3 className={`text-2xl sm:text-4xl md:text-7xl font-light uppercase tracking-tighter transition-colors duration-[1200ms] truncate ${activeStep === i ? 'text-blue-400' : 'group-hover:text-blue-400'}`}>
                    {step}
                  </h3>
                </div>
                <div className={`transition-transform duration-[1200ms] ${activeStep === i ? 'rotate-90 text-blue-400' : 'text-foreground/10 group-hover:text-foreground group-hover:translate-x-4'}`}>
                  <ArrowRight className="w-6 h-6 md:w-10 md:h-10 shrink-0" />
                </div>
              </div>

              <AnimatePresence>
                {activeStep === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                    className="overflow-hidden"
                  >
                    {step === "Discovery" && <DiscoveryDetail />}
                    {step === "Our Projects" && <ProjectsDetail />}
                    {step === "Engineering" && <EngineeringDetail />}
                    {step === "FAQs" && <FaqDetail />}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
