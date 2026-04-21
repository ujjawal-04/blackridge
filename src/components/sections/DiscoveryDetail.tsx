"use client";

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const DiscoveryDetail = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
      {/* Left Column: Content */}
      <div className="space-y-6 lg:pt-16 xl:pt-20">
        <div className="space-y-8">
          <h4 className="text-2xl md:text-4xl font-light tracking-tighter uppercase leading-[0.95]">
            HIGH-PERFORMANCE <span className="text-blue-400 italic">SYSTEMS</span>
          </h4>
          <p className="text-xl md:text-2xl text-foreground/50 leading-relaxed font-light max-w-xl">
            We design and build high-performance web platforms,
            AI-powered systems, and scalable digital products.
            <br />
            From eCommerce to internal tools, every system is engineered
            for performance, flexibility, and long-term growth.
            <br />
            <span className="text-foreground font-normal">No templates. No shortcuts. <span className="text-blue-400 italic">Just systems that work.</span></span>
          </p>
        </div>
      </div>

      {/* Right Column: Visuals */}
      <div className="relative flex items-start justify-center lg:justify-end w-full lg:-mt-20 xl:-mt-24">
        <div className="relative w-full max-w-[600px] aspect-[4/5] self-start drop-shadow-2xl">
          <Image
            src="/image1.png"
            fill
            alt="Aura Systems Mockups"
            className="object-contain object-top lg:object-[right_top]"
            priority
          />
        </div>
      </div>
    </div>
  );
};
