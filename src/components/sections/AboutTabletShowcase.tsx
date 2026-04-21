"use client";

import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Layers,
  PenTool,
  Search,
  Shield,
  Users,
} from "lucide-react";

type TiltState = {
  x: number;
  y: number;
};

type StrategyCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  active: boolean;
};

type PipelineItemProps = {
  label: string;
  status: string;
  detail: string;
};

type ResultRowProps = {
  icon: React.ReactNode;
  label: string;
  sub: string;
  highlight?: boolean;
};

export default function AboutTabletShowcase() {
  const [tick, setTick] = useState(0);
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev >= 300 ? 0 : prev + 1));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2.2;
    const rotateY = ((x - centerX) / centerX) * 2.2;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const isStrategy = tick < 100;
  const isEngineering = tick >= 100 && tick < 200;
  const isLive = tick >= 200;

  return (
    <div
      className="relative bg-transparent p-2 md:p-3"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(59,130,246,0.12),transparent_62%)] pointer-events-none" />
      <div className="mono text-[10px] text-foreground/35 uppercase tracking-[0.22em] mb-4 md:mb-5">
        PRODUCT_CREATION_MATRIX / 2026
      </div>

      <div className="relative w-full aspect-[0.92] sm:aspect-[1.1] md:aspect-[1.45] transition-transform duration-300 ease-out"
           style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#1c1d20]/80 via-[#070708]/95 to-[#1c1d20]/80 shadow-[0_20px_45px_-22px_rgba(0,0,0,0.75)]">
          <div className="absolute inset-[4px] rounded-[1.75rem] bg-black/90 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />

            <div className="w-full h-full relative flex flex-col pt-5 px-4 md:px-5">
              <div
                className={`absolute inset-0 px-4 md:px-5 pt-5 pb-6 transition-all duration-700 ${
                  isStrategy ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-0 pointer-events-none"
                }`}
              >
                <div className="h-full grid grid-cols-2 gap-4 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-500/10 border border-blue-500/25 rounded-full mb-3">
                      <Search className="w-3.5 h-3.5 text-blue-400" />
                      <span className="mono text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em]">01. Service Design</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight leading-[1.1] mb-2">
                      Build Scope Matrix
                    </h3>
                    <p className="text-[11px] text-white/50 leading-relaxed max-w-xs">
                      Every project starts with a clear product lane so teams know exactly what ships first and what scales next.
                    </p>

                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] mono uppercase tracking-[0.16em] text-white/45">
                        <span>Website Lane</span>
                        <span>Brand + Conversion</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] mono uppercase tracking-[0.16em] text-white/45">
                        <span>AI Lane</span>
                        <span>Automation + Insights</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] mono uppercase tracking-[0.16em] text-white/45">
                        <span>Ecommerce Lane</span>
                        <span>Catalog + Checkout</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 border-l border-white/10 pl-3 md:pl-4">
                    <StrategyCard
                      icon={<Users className="w-4 h-4" />}
                      title="Website Creation"
                      desc="Conversion-focused marketing sites, portfolios, and business platforms built for speed and clarity."
                      active={tick > 18}
                    />
                    <StrategyCard
                      icon={<Layers className="w-4 h-4" />}
                      title="AI Platform Creation"
                      desc="Custom AI-powered products, workflow automation, and data-aware dashboards for smarter operations."
                      active={tick > 36}
                    />
                    <StrategyCard
                      icon={<Shield className="w-4 h-4" />}
                      title="Ecommerce Creation"
                      desc="Scalable storefronts with product management, secure checkout, and integrated payment workflows."
                      active={tick > 54}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`absolute inset-0 px-4 md:px-5 pt-5 pb-6 transition-all duration-700 ${
                  isEngineering ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-0 pointer-events-none"
                }`}
              >
                <div className="h-full">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-500/10 border border-blue-500/25 rounded-full mb-3">
                      <PenTool className="w-3.5 h-3.5 text-blue-400" />
                      <span className="mono text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em]">02. Production</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight leading-[1.1] mb-2">
                      Delivery Control Room
                    </h3>
                    <p className="text-[11px] text-white/50 mb-4 leading-relaxed max-w-xs">
                      Three parallel tracks run together with shared QA and deployment standards.
                    </p>

                    <div className="space-y-2.5">
                      <PipelineItem
                        label="Website Delivery"
                        status="Live"
                        detail="UX mapped, pages engineered, SEO + analytics connected"
                      />
                      <PipelineItem
                        label="AI Platform Delivery"
                        status="Deploying"
                        detail="Workflow automations, assistant logic, and dashboard intelligence"
                      />
                      <PipelineItem
                        label="Ecommerce Delivery"
                        status="QA"
                        detail="Catalog rules, checkout logic, and order lifecycle validation"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute inset-0 px-4 md:px-5 pt-5 pb-6 transition-all duration-700 ${
                  isLive ? "opacity-100 z-20" : "opacity-0 translate-y-6 z-0 pointer-events-none"
                }`}
              >
                <div className="h-full">
                  <div className="h-full flex flex-col gap-2.5 min-h-0">
                    <ResultRow
                      icon={<Shield className="w-4 h-4" />}
                      label="Website Conversion"
                      sub="Landing and funnel structure built to capture demand"
                      highlight
                    />
                    <ResultRow
                      icon={<Layers className="w-4 h-4" />}
                      label="AI Workflow Gains"
                      sub="Automations reduce manual operations and support response speed"
                    />
                    <ResultRow
                      icon={<Users className="w-4 h-4" />}
                      label="Ecommerce Revenue Lift"
                      sub="Optimized catalog, checkout, and retention loops"
                    />

                    <button
                      type="button"
                      className="mt-auto p-2.5 rounded-xl border border-blue-500/30 bg-blue-500/15 hover:bg-blue-500/25 transition-colors text-left flex items-center justify-between"
                    >
                      <span className="mono text-[9px] text-blue-300 uppercase tracking-[0.14em]">Explore Service Blueprint</span>
                      <ChevronRight className="w-4 h-4 text-blue-300" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StrategyCard({ icon, title, desc, active }: StrategyCardProps) {
  return (
    <div
      className={`p-2.5 rounded-lg border transition-all duration-500 ${
        active
          ? "bg-white/[0.03] border-white/10 translate-x-0"
          : "bg-transparent border-transparent opacity-0 translate-x-4"
      }`}
    >
      <div className="flex gap-2.5 items-start">
        <div className="mt-0.5 p-1.5 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/25">{icon}</div>
        <div className="flex-1">
          <h4 className="text-[13px] font-medium text-white mb-0.5 tracking-tight">{title}</h4>
          <p className="text-[10px] text-white/45 leading-relaxed line-clamp-2">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PipelineItem({ label, status, detail }: PipelineItemProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
      <div className="flex items-center justify-between mb-1.5">
        <span className="mono text-[9px] uppercase tracking-[0.12em] text-white/80">{label}</span>
        <span className="mono text-[8px] uppercase tracking-[0.12em] text-blue-300">{status}</span>
      </div>
      <p className="text-[10px] text-white/45 leading-relaxed line-clamp-2">
        {detail}
      </p>
    </div>
  );
}

function ResultRow({ icon, label, sub, highlight = false }: ResultRowProps) {
  return (
    <div
      className={`flex items-center gap-2.5 p-2 rounded-lg border ${
        highlight ? "bg-blue-500/10 border-blue-500/30" : "bg-white/[0.03] border-white/10"
      }`}
    >
      <div className={`p-1.5 rounded-md ${highlight ? "bg-blue-500/20 text-blue-300" : "bg-white/10 text-white/60"}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-medium text-white truncate">{label}</div>
        <div className="text-[9px] text-white/45 mt-0.5 truncate">{sub}</div>
      </div>
      <CheckCircle2 className={`w-4 h-4 ${highlight ? "text-blue-300" : "text-emerald-400/70"}`} />
    </div>
  );
}
