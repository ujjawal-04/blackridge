"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings2 } from 'lucide-react';

/**
 * Custom hook for a more advanced terminal typing effect that handles sequential lines
 */
const useTerminalSequence = (lines: { text: string; delay?: number; highlight?: boolean }[], startDelay = 1000) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted || visibleLines >= lines.length) return;

    const targetLine = lines[visibleLines];
    if (currentText.length < targetLine.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(targetLine.text.slice(0, currentText.length + 1));
      }, 30 + Math.random() * 30); // Human-like typing speed
      return () => clearTimeout(timeout);
    } else {
      // Line finished, wait a bit then move to next
      const timeout = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
        setCurrentText("");
      }, targetLine.delay || 500);
      return () => clearTimeout(timeout);
    }
  }, [currentText, isStarted, visibleLines, lines]);

  return {
    completedLines: lines.slice(0, visibleLines),
    typingLine: visibleLines < lines.length ? currentText : null,
    totalCompleted: visibleLines === lines.length
  };
};

export const Terminal = () => {
  const commandLine = "blackridge build --target production --optimize alpha";
  const logLines = [
    { text: "parsing configuration...", delay: 400 },
    { text: "optimizing dependency graph...", delay: 600 },
    { text: "bundling assets [2.4mb]...", delay: 800 },
    { text: "✓ Deployment Ready", highlight: true }
  ];

  const commandEffect = useTerminalSequence([{ text: commandLine, delay: 600 }], 1500);

  const logEffect = useTerminalSequence(logLines, 0);
  const activeLogEffect = commandEffect.totalCompleted ? logEffect : { completedLines: [], typingLine: null, totalCompleted: false };

  return (
    <div className="relative group perspective-[2000px] w-full max-w-2xl mx-auto lg:mx-0">
      {/* Subtle Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        className="industrial-card relative bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col z-20"
      >
        {/* Window Header */}
        <div className="bg-foreground/[0.03] border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/30" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-widest text-text-muted font-mono">BLACKRIDGE_SHELL_V1.0</span>
            <Settings2 size={10} className="text-text-muted animate-spin-slow" />
          </div>
          <div className="w-10" />
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm space-y-4 min-h-[160px] overflow-hidden">
          {/* Command Line */}
          <div className="flex items-start gap-3">
            <span className="text-accent shrink-0">➜</span>
            <span className="text-foreground/90">
              {commandEffect.completedLines.length > 0 ? commandLine : commandEffect.typingLine}
              {(!commandEffect.totalCompleted || (commandEffect.totalCompleted && activeLogEffect.totalCompleted)) && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-accent ml-1 translate-y-0.5"
                />
              )}
            </span>
          </div>

          {/* Log Lines */}
          <div className="space-y-1.5 pl-7">
            {activeLogEffect.completedLines.map((log, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 ${log.highlight ? 'text-accent mt-2 font-bold' : 'text-text-muted'}`}
              >
                {!log.highlight && <span className="text-[10px] opacity-30 select-none">[{(0.01 + index * 0.04).toFixed(2)}s]</span>}
                <span>{log.text}</span>
              </div>
            ))}
            {activeLogEffect.typingLine && (
              <div className="flex items-center gap-3 text-text-muted">
                <span className="text-[10px] opacity-30 select-none">[{(0.01 + activeLogEffect.completedLines.length * 0.04).toFixed(2)}s]</span>
                <span>{activeLogEffect.typingLine}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.4 }}
                  className="inline-block w-1.5 h-3 bg-foreground/20 ml-1"
                />
              </div>
            )}
          </div>
        </div>

        {/* Terminal Footer Decoration */}
        <div className="px-6 py-4 border-t border-border bg-foreground/[0.02] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="h-1 w-24 bg-foreground/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={commandEffect.totalCompleted ? { width: '100%' } : {}}
                transition={{ duration: 3 }}
                className="h-full bg-accent/40"
              />
            </div>
            <span className="text-[9px] text-text-muted mono uppercase tracking-tight">CPU: 12%</span>
          </div>
          <div className="text-[9px] text-text-muted mono uppercase tracking-tight">STABLE-V2.4.0</div>
        </div>
      </motion.div>

      {/* Back Decoration Layers */}
      <div className="hidden sm:block absolute top-0 right-0 w-[80%] h-full border border-border bg-surface-low -z-10 translate-x-12 -translate-y-8 rounded-md" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-[90%] h-[120%] border-l border-border -z-20 -translate-x-12 translate-y-12" />
    </div>
  );
};
