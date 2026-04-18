"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sun, Moon, X, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const timeFormatter = new Intl.DateTimeFormat(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const updateTime = () => {
      const timeStr = timeFormatter.format(new Date());
      setTime(`${timeStr}_LOCAL`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const brandWordmarkStyles = {
    minimal: 'mono text-sm md:text-base font-medium tracking-[0.14em] uppercase text-foreground/85',
    premium: 'text-sm md:text-base font-semibold tracking-[0.1em] uppercase text-foreground/90',
    bold: 'mono text-base md:text-lg font-bold tracking-[0.08em] uppercase text-foreground',
  } as const;

  const activeBrandWordmarkStyle: keyof typeof brandWordmarkStyles = 'premium';
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('/#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      const targetId = href.replace('/#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback for different pages
        window.location.href = href;
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] px-3 sm:px-6 py-4 md:px-12 flex justify-start md:justify-between items-center border-b border-border bg-bg/70 backdrop-blur-xl">
        <div className="flex items-center justify-start gap-8">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-1 md:gap-0 group"
          >
            <div className="relative w-28 h-10 md:w-32 md:h-11 overflow-hidden -mr-6 md:-mr-8 [clip-path:inset(0_38%_0_0)] md:[clip-path:inset(0_34%_0_0)]">
              <Image
                src={mounted && resolvedTheme === 'light' ? "/logo2.png" : "/logo1.png"}
                alt="Black Ridge logo"
                fill
                sizes="(max-width: 768px) 112px, 128px"
                priority
                quality={100}
                className="object-contain object-left origin-left scale-[1.55] md:scale-[1.5]"
              />
            </div>
            <span className={`ml-0 md:-ml-3 ${brandWordmarkStyles[activeBrandWordmarkStyle]} group-hover:text-foreground transition-colors`}>
              BLACKRIDGE
            </span>
          </Link>

          <div className="hidden lg:flex gap-8 mono text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/40">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors ${pathname === link.href
                  ? 'text-blue-400 opacity-100'
                  : 'hover:text-foreground/80'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4 md:gap-8 lg:gap-12">
          <div className="hidden sm:flex items-center gap-4 border-x border-border px-8 h-12">
            <span className="mono text-[9px] text-foreground/30 uppercase tracking-widest">Local_Time</span>
            <span className="mono text-[10px] text-foreground/70 tabular-nums shrink-0">{time || '00:00:00_LOCAL'}</span>
          </div>

          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="hidden sm:flex items-center justify-center w-10 h-10 border border-border text-foreground hover:bg-foreground hover:text-bg transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
          </button>

          <Link
            href="/#contact"
            onClick={handleScroll}
            className="!hidden lg:!inline-flex btn-os text-[10px] py-2 px-6"
          >
            Discuss Project
            <ArrowRight size={14} />
          </Link>

          <button
            className="lg:hidden p-2 text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-bg pt-32 px-10 lg:hidden"
          >
            <div className="space-y-12">
              <div className="space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl font-light uppercase tracking-tighter text-foreground hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-12 border-t border-border space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="mono text-[10px] text-foreground/30 uppercase tracking-widest">Local_Time</p>
                    <p className="mono text-xl text-foreground font-medium">{time || '00:00:00_LOCAL'}</p>
                  </div>
                  <button
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    className="flex items-center justify-center w-12 h-12 border border-border text-foreground hover:bg-foreground hover:text-bg transition-colors"
                  >
                    {mounted && (resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
                  </button>
                </div>
                <Link
                  href="/#contact"
                  onClick={handleScroll}
                  className="btn-os w-full justify-center text-xs py-3"
                >
                  Discuss Project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}