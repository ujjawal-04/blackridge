"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-bg pb-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-border mono text-[10px] text-foreground/30 tracking-widest uppercase">

          {/* Left */}
          <p>© 2026 BlackRidge. All rights reserved.</p>

          {/* Center */}
          <p>Systems built to scale.</p>

          {/* Right */}
          <a href="mailto:info@blackridge.co.in" className="hover:text-blue-400 transition-colors normal-case tracking-normal">info@blackridge.co.in</a>

        </div>

      </div>
    </footer>
  );
}