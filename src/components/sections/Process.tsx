"use client";

import React from 'react';
import { DiscoveryDetail } from '@/components/sections/DiscoveryDetail';
import { ExperienceSpotlight } from '@/components/sections/ExperienceSpotlight';
import { ProjectsDetail } from '@/components/sections/ProjectsDetail';
import { EngineeringDetail } from '@/components/sections/EngineeringDetail';
import { FaqDetail } from '@/components/sections/FaqDetail';

export const Process = () => {
  const steps = [
    { title: "Engineering", content: <EngineeringDetail />, accent: "from-sky-500/20 via-blue-500/15 to-cyan-300/10", inline: false },
    // { title: "Our Projects", content: <ProjectsDetail />, accent: "from-indigo-500/20 via-blue-500/15 to-sky-400/10", inline: false },
    { title: "Discovery", content: <DiscoveryDetail />, accent: "from-blue-500/25 via-blue-400/15 to-cyan-400/10", inline: false },
    { title: "Experience", content: <ExperienceSpotlight />, accent: "from-amber-200/15 via-zinc-200/10 to-white/5", inline: false },
    { title: "FAQs", content: <FaqDetail />, accent: "from-cyan-500/20 via-blue-500/15 to-blue-300/10", inline: true },
  ];

  return (
    <section id="lab" className="py-20 md:py-24 bg-bg border-y border-border relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-0">
          {steps.map((step, i) =>
            step.inline ? (
              /* Inline (side-by-side) layout — used for FAQs */
              <div key={step.title} className="group mt-6">
                <div className="relative flex flex-col lg:flex-row lg:gap-16 lg:items-start pt-6 md:pt-8">
                  {/* Left: step label + title */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 lg:w-56 shrink-0 mb-6 lg:mb-0">
                    <span className="mono shrink-0 rounded-sm border border-white/10 bg-white/[0.02] px-2.5 py-1 text-sm md:text-base font-medium tracking-[0.18em] text-foreground/55">
                      0{i + 1}
                    </span>
                    <h3 className="text-2xl sm:text-4xl md:text-7xl font-light uppercase tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300">
                      {step.title}
                    </h3>
                  </div>

                  {/* Right: content (no separator) */}
                  <div className="flex-1 min-w-0">
                    {step.content}
                  </div>
                </div>
              </div>
            ) : (
              /* Default stacked layout */
              <div key={step.title} className="group">
                <div className="relative flex items-center justify-between border-b border-border/90 dark:border-white/15 py-6 md:py-8 gap-4">
                  <div className="relative flex items-center gap-4 md:gap-10 overflow-hidden">
                    <span className="mono shrink-0 rounded-sm border border-white/10 bg-white/[0.02] px-2.5 py-1 text-sm md:text-base font-medium tracking-[0.18em] text-foreground/55">
                      0{i + 1}
                    </span>
                    <h3 className="truncate text-2xl sm:text-4xl md:text-7xl font-light uppercase tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="overflow-hidden">
                  {step.content}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
