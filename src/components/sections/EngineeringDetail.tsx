"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, ShoppingBag, Box, Atom, Layers } from 'lucide-react';

const technologies = [
  {
    name: "NEXT.js",
    icon: null,
    style: "font-semibold tracking-tighter text-2xl",
    hasArrow: false,
    link: "https://nextjs.org"
  },
  {
    name: "Remix",
    icon: <Layers size={24} className="mr-2 opacity-80" />,
    style: "font-bold tracking-tight text-xl lowercase flex items-center",
    hasArrow: false,
    link: "https://remix.run"
  },
  {
    name: "React",
    icon: <Atom size={24} className="mr-2" />,
    style: "font-light tracking-wide text-xl flex items-center",
    hasArrow: false,
    link: "https://react.dev"
  },
  {
    name: "shopify",
    icon: <ShoppingBag size={24} className="mr-2 text-[#95bf47]" />,
    style: "font-bold tracking-tight text-2xl lowercase flex items-center italic",
    hasArrow: false,
    link: "https://shopify.com"
  },
  {
    name: "medusa",
    icon: <Hexagon size={24} className="mr-2 opacity-80" fill="currentColor" />,
    style: "font-bold tracking-tight text-xl lowercase flex items-center",
    hasArrow: false,
    link: "https://medusajs.com"
  },
  {
    name: "BIGCOMMERCE",
    icon: <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[14px] border-t-transparent border-b-[14px] border-b-current mr-2 -translate-y-1" />,
    style: "font-semibold tracking-tighter text-base flex items-center",
    hasArrow: false,
    link: "https://bigcommerce.com"
  },
  {
    name: "SANITY",
    icon: null,
    style: "font-bold tracking-widest text-2xl uppercase",
    hasArrow: false,
    link: "https://sanity.io"
  },
  {
    name: "Payload",
    icon: <Box size={24} className="mr-2" strokeWidth={3} />,
    style: "font-medium tracking-tight text-xl flex items-center",
    hasArrow: false,
    link: "https://payloadcms.com"
  },
  {
    name: "ghost",
    icon: <div className="w-6 h-6 rounded-full border-[3px] border-blue-400 mr-2 flex items-center justify-center"><div className="w-4 h-4 rounded-full border-[1px] border-blue-400/50 relative left-1" /></div>,
    style: "font-bold tracking-tight text-xl lowercase flex items-center",
    link: "https://ghost.org"
  }
];

const technologyTree = [
  {
    branch: "Framework Layer",
    leaves: ["NEXT.js", "Remix", "React"]
  },
  {
    branch: "Commerce Core",
    leaves: ["shopify", "medusa", "BIGCOMMERCE"]
  },
  {
    branch: "Content Systems",
    leaves: ["SANITY", "Payload", "ghost"]
  }
] as const;

const technologyMap = technologies.reduce<Record<string, (typeof technologies)[number]>>((acc, tech) => {
  acc[tech.name] = tech;
  return acc;
}, {});

export const EngineeringDetail = () => {
  const [hoveredTech, setHoveredTech] = React.useState<string | null>(null);

  return (
    <div className="py-10 md:py-14">
      <div className="max-w-4xl mb-10 md:mb-12 space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-light tracking-tighter leading-[0.95]">
          BUILT ON MODERN
          <span className="text-blue-400 italic font-light"> TECHNOLOGY STACKS</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-3xl">
          We use production-grade tools and frameworks to build systems that are fast,
          scalable, and reliable.
          <br />
          Every technology we choose is tested, practical, and aligned with real-world use.
        </p>
      </div>

      <div className="relative rounded-md border border-dotted border-foreground/30 bg-bg/80 px-4 py-8 md:rounded-none md:border-0 md:px-8 md:py-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full border border-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.26em] text-foreground/80 md:text-sm"
          >
            BlackRidge Technology Tree
          </motion.div>
          <div className="mt-2 h-8 w-px bg-gradient-to-b from-blue-400/70 to-foreground/20" />
          <div className="hidden h-px w-[84%] max-w-5xl bg-foreground/25 md:block" />
        </div>

        <div className="mt-2 grid gap-8 md:grid-cols-3 md:gap-6">
          {technologyTree.map((node, branchIdx) => (
            <motion.div
              key={node.branch}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: branchIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="h-8 w-px bg-foreground/25" />
              <div className="rounded-full border border-dotted border-foreground/35 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-foreground/75 md:text-xs">
                {node.branch}
              </div>
              <div className="h-5 w-px bg-foreground/25" />

              <div className="relative w-full max-w-[330px]">
                <div className="absolute left-4 top-3 bottom-3 w-px bg-foreground/20" />
                <div className="space-y-3 pl-7">
                  {node.leaves.map((leafName, leafIdx) => {
                    const tech = technologyMap[leafName];
                    if (!tech) {
                      return null;
                    }

                    return (
                      <motion.div
                        key={leafName}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.45, delay: 0.2 + leafIdx * 0.08 + branchIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                      >
                        <div className="absolute left-[-12px] top-1/2 h-px w-3 -translate-y-1/2 bg-foreground/25" />
                        <a
                          href={tech.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setHoveredTech(leafName)}
                          onMouseLeave={() => setHoveredTech(null)}
                          onFocus={() => setHoveredTech(leafName)}
                          onBlur={() => setHoveredTech(null)}
                          className="group relative flex min-h-[76px] items-center rounded-sm border border-dotted border-foreground/25 bg-bg/65 px-4 py-4 transition-colors duration-300 hover:bg-foreground/[0.03]"
                        >
                          <div
                            className={`absolute right-3 top-3 h-1.5 w-1.5 transition-all duration-200 md:h-2 md:w-2 ${
                              hoveredTech === leafName
                                ? 'bg-blue-400 opacity-100 shadow-[0_0_10px_rgba(59,130,246,0.9)]'
                                : 'bg-blue-400/0 opacity-0'
                            }`}
                          />
                          <div className={`${tech.style} text-foreground/75 transition-colors duration-300 group-hover:text-foreground`}>
                            {tech.icon}
                            <span>{tech.name}</span>
                          </div>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
