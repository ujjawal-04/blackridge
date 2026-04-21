"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Users,
  Layers,
  Zap,
  Shield,
  Activity,
  Globe,
  Search,
  PenTool,
  Rocket,
  CheckCircle2
} from 'lucide-react';

export default function DeviceShowcase() {
  // Phase cycles every 5s (0, 1, 2) — only 1 state update per 5 seconds
  const [phase, setPhase] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isMobile = useRef(false);

  useEffect(() => {
    // Detect mobile once
    isMobile.current = window.matchMedia('(max-width: 1023px)').matches;

    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 3D Hover Effect — desktop only, throttled via rAF
  const rafRef = useRef<number>(0);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isMobile.current) return;
    
    const target = e.currentTarget as HTMLElement;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const x = mouseX - rect.left;
      const y = mouseY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      
      setTilt({ x: rotateX, y: rotateY });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const isStrategy = phase === 0;
  const isEngineering = phase === 1;
  const isLive = phase === 2;

  // Calculate progress values for the engineering phase
  const progressValues = {
    interfaceDesign: isEngineering ? 100 : 0,
    functionalLogic: isEngineering ? 92 : 0,
    qualityAssurance: isEngineering ? 78 : 0,
  };

  return (
    <div 
      className="w-full flex flex-col items-center justify-center p-4 selection:bg-blue-500/30 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      {/* HARDWARE DEVICE CONTAINER */}
      <div 
        className="relative w-[300px] sm:w-[340px] h-[600px] sm:h-[700px] z-10 origin-center lg:scale-[0.8] xl:scale-[0.9] 2xl:scale-100"
        style={{ 
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.3s ease-out',
          willChange: 'transform',
        }}
      >
        {/* Hardware Buttons */}
        <div className="absolute -left-[6px] top-32 w-[6px] h-12 bg-gradient-to-l from-[#111] to-[#333] rounded-l-md border-y border-l border-white/10 shadow-[-2px_0_5px_rgba(0,0,0,0.5)]" />
        <div className="absolute -left-[6px] top-48 w-[6px] h-12 bg-gradient-to-l from-[#111] to-[#333] rounded-l-md border-y border-l border-white/10 shadow-[-2px_0_5px_rgba(0,0,0,0.5)]" />
        <div className="absolute -right-[6px] top-40 w-[6px] h-16 bg-gradient-to-r from-[#111] to-[#333] rounded-r-md border-y border-r border-white/10 shadow-[2px_0_5px_rgba(0,0,0,0.5)]" />

        {/* Outer Steel Bezel */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#444] via-[#0a0a0a] to-[#444] rounded-[3.5rem]">
          
          {/* Inner Black Border (Bezel) */}
          <div className="absolute inset-[5px] bg-black rounded-[3.2rem] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,1)_inset]">
            

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-[100] flex items-center justify-between px-3 border border-white/[0.08] shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
               <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a1a] border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/20 blur-[1px]" />
               </div>
               <div className="flex gap-2 items-center">
                 <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isLive ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-white/20'}`} />
               </div>
            </div>

            {/* --- SCREEN CONTENT --- */}
            <div className="w-full h-full relative flex flex-col bg-[#050505] pt-14">
              
              {/* PHASE 1: DISCOVERY & STRATEGY */}
              <div className={`absolute inset-0 px-6 py-14 flex flex-col transition-all duration-700 ease-out ${isStrategy ? 'opacity-100 translate-y-0 z-20' : 'opacity-0 translate-y-4 z-0 pointer-events-none'}`}>
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full w-max mb-6">
                    <Search className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em]">01. Discovery</span>
                 </div>
                 
                 <h2 className="text-3xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                   Defining the <br/><span className="text-blue-400">Winning Path</span>
                 </h2>
                 <p className="text-sm text-white/40 mb-8 leading-relaxed">We map your business goals to a high-performance digital roadmap.</p>

                 {/* Strategy Cards — now use CSS transitions instead of tick-based logic */}
                 <div className="space-y-3">
                    <StrategyCard 
                      icon={<Users className="w-4 h-4" />} 
                      title="User Experience Research" 
                      desc="Understanding your customer's journey."
                      active={isStrategy}
                      delay="delay-[200ms]"
                    />
                    <StrategyCard 
                      icon={<Globe className="w-4 h-4" />} 
                      title="Market Positioning" 
                      desc="Analysis of your competitive landscape."
                      active={isStrategy}
                      delay="delay-[600ms]"
                    />
                    <StrategyCard 
                      icon={<Layers className="w-4 h-4" />} 
                      title="Product Roadmap" 
                      desc="A phased plan for scalable growth."
                      active={isStrategy}
                      delay="delay-[1000ms]"
                    />
                 </div>
              </div>

              {/* PHASE 2: DESIGN & CRAFTSMANSHIP */}
              <div className={`absolute inset-0 px-6 py-14 flex flex-col transition-all duration-700 ease-out ${isEngineering ? 'opacity-100 translate-y-0 z-20' : 'opacity-0 translate-y-4 z-0 pointer-events-none'}`}>
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full w-max mb-6">
                    <PenTool className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[9px] font-bold text-amber-400 uppercase tracking-[0.2em]">02. Craftsmanship</span>
                 </div>
                 
                 <h2 className="text-3xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                   Building with <br/><span className="text-amber-400">Precision</span>
                 </h2>
                 <p className="text-sm text-white/40 mb-8 leading-relaxed">Meticulous design meets world-class engineering standards.</p>

                 {/* Engineering Steps — CSS transition driven */}
                 <div className="space-y-4">
                    <ProgressRow 
                       label="Interface Design" 
                       value="100%" 
                       progress={progressValues.interfaceDesign} 
                    />
                    <ProgressRow 
                       label="Functional Logic" 
                       value="92%" 
                       progress={progressValues.functionalLogic} 
                    />
                    <ProgressRow 
                       label="Quality Assurance" 
                       value="Running" 
                       progress={progressValues.qualityAssurance}
                    />
                 </div>

                 {/* Visual Mockup Element */}
                 <div className="mt-8 flex-1 bg-white/[0.03] border border-white/10 rounded-2xl p-4 relative overflow-hidden group">
                    <div className="flex gap-2 mb-4">
                       <div className="w-2 h-2 rounded-full bg-red-500/50" />
                       <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                       <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                    </div>
                    <div className="space-y-2">
                       <div className="h-2 w-3/4 bg-white/10 rounded" />
                       <div className="h-2 w-1/2 bg-white/5 rounded" />
                       <div className="grid grid-cols-2 gap-2 mt-4">
                          <div className="h-12 bg-white/5 rounded-lg border border-white/5 animate-pulse" />
                          <div className="h-12 bg-white/5 rounded-lg border border-white/5 animate-pulse" style={{animationDelay: '0.2s'}} />
                       </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                 </div>
              </div>

              {/* PHASE 3: GROWTH & RESULTS */}
              <div className={`absolute inset-0 transition-all duration-700 ease-out ${isLive ? 'opacity-100 translate-y-0 z-20' : 'opacity-0 translate-y-4 z-0 pointer-events-none'}`}>
                 <div className="h-full w-full flex flex-col bg-[#000]">
                    {/* Header */}
                    <div className="pt-14 pb-4 px-6 border-b border-white/10 flex justify-between items-end bg-[#050505]">
                       <div>
                          <h1 className="text-white font-bold text-lg tracking-tight">Your Success</h1>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mt-1">Live Performance</p>
                       </div>
                       <div className="w-8 h-8 rounded-full border border-white/10 bg-blue-500/10 flex items-center justify-center">
                          <Rocket className="w-4 h-4 text-blue-400" />
                       </div>
                    </div>

                    <div className="flex-1 p-6 space-y-6 overflow-y-auto pb-24">
                       {/* High Level Results */}
                       <div className="space-y-1">
                          <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest flex items-center gap-2">
                             Growth Pulse <Activity className="w-3 h-3" />
                          </div>
                          <div className="text-4xl font-light text-white tracking-tighter">
                             +42.5%<span className="text-lg text-white/40 ml-1">ROI</span>
                          </div>
                          <div className="text-xs text-white/40 pt-1">Since system deployment</div>
                       </div>

                       {/* Interactive Chart */}
                       <div className="w-full h-32 relative mt-4">
                          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                             <path 
                                d="M0,95 Q25,90 40,60 T70,30 T100,10" 
                                fill="none" 
                                stroke="#3b82f6" 
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="transition-all duration-[2s] ease-out [stroke-dasharray:300] [stroke-dashoffset:300]"
                                style={{ strokeDashoffset: isLive ? 0 : 300 }}
                             />
                             <circle cx="100" cy="10" r="4" fill="#000" stroke="#3b82f6" strokeWidth="2" 
                                className={`transition-opacity duration-500 delay-[2s] ${isLive ? 'opacity-100' : 'opacity-0'}`} />
                          </svg>
                       </div>

                       <div className="grid grid-cols-1 gap-3">
                          <ResultRow icon={<Shield className="w-4 h-4" />} label="Enterprise-Grade Security" sub="Active Protection" />
                          <ResultRow icon={<Zap className="w-4 h-4" />} label="Sub-Second Latency" sub="99.9% Faster Response" />
                          <ResultRow icon={<Users className="w-4 h-4" />} label="Scaled Engagement" sub="+12k New Users" />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Navigation Dock */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 h-[60px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center gap-10 z-[70] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                 <NavIcon icon={<Search />} label="Plan" active={isStrategy} color="blue" />
                 <NavIcon icon={<PenTool />} label="Design" active={isEngineering} color="amber" />
                 <NavIcon icon={<Rocket />} label="Launch" active={isLive} color="emerald" />
              </div>

              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-[100]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Internal UI Components ---

function StrategyCard({ icon, title, desc, active, delay }: { icon: React.ReactNode, title: string, desc: string, active: boolean, delay: string }) {
  return (
    <div className={`p-4 rounded-xl border transition-all duration-700 ${delay} ${active ? 'bg-white/[0.04] border-white/10 translate-x-0 opacity-100' : 'bg-transparent border-transparent opacity-0 translate-x-4'}`}>
       <div className="flex gap-4 items-start">
          <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
             {icon}
          </div>
          <div>
             <h4 className="text-sm font-bold text-white mb-0.5">{title}</h4>
             <p className="text-[11px] text-white/40 leading-snug">{desc}</p>
          </div>
       </div>
    </div>
  );
}

function ProgressRow({ label, value, progress }: { label: string, value: string, progress: number }) {
  return (
    <div className="space-y-2">
       <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
          <span className="text-white/40">{label}</span>
          <span className="text-white">{value}</span>
       </div>
       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
             className="h-full bg-amber-500 transition-all duration-[1.5s] ease-out shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
             style={{ width: `${progress}%` }} 
          />
       </div>
    </div>
  );
}

function ResultRow({ icon, label, sub }: { icon: React.ReactNode, label: string, sub: string }) {
  return (
    <div className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
       <div className="text-blue-400 opacity-60">
          {icon}
       </div>
       <div className="flex-1">
          <div className="text-xs font-bold text-white leading-tight">{label}</div>
          <div className="text-[10px] text-white/30 mt-0.5">{sub}</div>
       </div>
       <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/50" />
    </div>
  );
}

function NavIcon({ icon, label, active, color }: { icon: React.ReactElement<{ size?: number; strokeWidth?: number }>, label: string, active: boolean, color: 'blue' | 'amber' | 'emerald' }) {
  const colors = {
    blue: 'text-blue-400',
    amber: 'text-amber-400',
    emerald: 'text-emerald-400'
  };
  
  return (
    <div className={`relative flex flex-col items-center gap-1.5 transition-all duration-500 ${active ? 'scale-110 -translate-y-1' : 'opacity-40 grayscale'}`}>
       <div className={`transition-colors ${active ? colors[color] : 'text-white'}`}>
          {React.cloneElement(icon, { 
            size: 18, 
            strokeWidth: active ? 2.5 : 2 
          })}
       </div>
       <span className={`text-[8px] font-bold uppercase tracking-[0.15em] ${active ? colors[color] : 'text-white/40'}`}>{label}</span>
       <div className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-opacity duration-300 ${active ? 'opacity-100 ' + (color === 'blue' ? 'bg-blue-500' : color === 'amber' ? 'bg-amber-500' : 'bg-emerald-500') : 'opacity-0'}`} />
    </div>
  );
}

