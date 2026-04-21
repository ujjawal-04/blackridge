"use client";

import React from 'react';
import Image from 'next/image';
import {
	FileText,
	LayoutTemplate,
	Layers,
	Box,
	Monitor,
	PenTool,
	Smartphone,
	Code2,
	ArrowUpRight,
} from 'lucide-react';

const expertise = [
	{ icon: FileText, text: 'Product Identify' },
	{ icon: Monitor, text: 'Web Design' },
	{ icon: LayoutTemplate, text: 'User Experience Design' },
	{ icon: PenTool, text: 'Brand Design' },
	{ icon: Layers, text: 'Design systems' },
	{ icon: Smartphone, text: 'User Interface Design' },
	{ icon: Box, text: 'Product Design' },
	{ icon: Code2, text: 'Development' },
];

export const ExperienceSpotlight = () => {
	return (
		<div className="mt-8 md:mt-10 text-foreground rounded-xl overflow-hidden border border-[var(--experience-border)] bg-surface/35 backdrop-blur-sm">
			<div className="bg-gradient-to-b from-bg via-surface-low/80 to-surface/60 pt-12 pb-6 md:pt-16 md:pb-10 text-foreground">
				<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start">
					<div className="col-span-1 lg:col-span-2">
						<p className="text-[11px] font-bold tracking-widest uppercase mb-1">• Welcome</p>
						<p className="text-[11px] font-medium text-foreground/55 tracking-widest uppercase">To BlackRidge</p>
					</div>

					<div className="col-span-1 lg:col-span-10">
						<h3 className="text-4xl md:text-6xl lg:text-[5.5rem] font-extrabold uppercase leading-[0.9] tracking-tighter">
							Crafting Digital
							<br />
							<div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mt-2 lg:mt-0">
								<span>Enterprises</span>
								<span className="text-sm md:text-base font-medium normal-case tracking-normal text-foreground/60 max-w-[280px] leading-snug md:pb-3">
									Empowering global enterprises with a potent low-code platform.
								</span>
							</div>
						</h3>
					</div>
				</div>
			</div>

			<div className="relative w-full">
				<div className="absolute inset-0 flex flex-col z-0 pointer-events-none">
					<div className="flex-1 bg-surface-low/80" />
					<div className="flex-1 bg-bg" />
				</div>

				<div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-6 md:py-12">
					<div
						className="w-full h-[280px] sm:h-[400px] md:h-[520px] lg:h-[620px] relative overflow-hidden bg-surface-high border border-[var(--experience-border)]"
						style={{ clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)' }}
					>
						<Image
							src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
							alt="Team collaborating in a modern office"
							fill
							sizes="(max-width: 1024px) 100vw, 1400px"
							className="object-cover"
						/>
					</div>
				</div>
			</div>

			<div className="bg-bg text-foreground pt-10 pb-16 md:pt-12 md:pb-20">
				<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
					<div className="flex flex-col justify-center pr-0 lg:pr-12">
						<p className="text-[11px] font-bold text-foreground uppercase tracking-widest leading-relaxed mb-12 md:mb-16">
							• Focus on growing your business
							<br />
							&amp; leave the <span className="text-foreground/55">branding to the experts.</span>
						</p>

						<h4 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 md:mb-12">EXPERTISE</h4>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
							{expertise.map((item, index) => (
								<div key={index} className="flex items-center gap-4 group cursor-pointer">
									<item.icon size={18} className="text-foreground/45 group-hover:text-blue-400 transition-colors duration-300 stroke-[1.5]" />
									<span className="text-[13px] text-foreground/55 font-medium group-hover:text-blue-400 transition-colors duration-300">
										{item.text}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="flex items-center justify-center lg:justify-end">
						<div className="bg-surface-high w-full max-w-[600px] p-8 md:p-12 relative text-foreground border border-[var(--experience-border)] shadow-[0_18px_46px_-30px_rgba(15,111,255,0.35)]">
							<div
								className="absolute top-0 right-0 w-[50px] h-[50px] bg-blue-500/85"
								style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
							/>

							<p className="text-[11px] font-bold uppercase tracking-widest mb-8 text-blue-400">• Experience :</p>

							<p className="text-lg md:text-2xl font-medium leading-[1.4] tracking-tight mb-12 md:mb-16">
								From the founders: We don&apos;t want you to{' '}
								<span className="text-foreground/55">waste your time managing</span> in house and over spending.
								Leave to the heavy lifting to us so you can focus on{' '}
								<span className="text-foreground/55">working on your business.</span>
							</p>

							<div className="flex flex-row items-end justify-between border-t border-[var(--experience-divider)] pt-7 mt-auto gap-4">
								{/* <div className="flex items-center gap-4 min-w-0">
									<Image
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
										alt="Joe Elia"
										width={48}
										height={48}
										className="w-12 h-12 rounded-full object-cover border border-border shrink-0"
									/>
									<div className="min-w-0">
										<p className="text-[13px] font-bold uppercase tracking-wide truncate">JOE ELIA</p>
										<p className="text-[12px] text-foreground/55 font-medium mt-0.5 truncate">CEO at Zailabs</p>
									</div>
								</div> */}

								<a href="#contact" className="flex items-center gap-2 group pb-1 shrink-0">
									<span className="text-[13px] font-bold border-b-[1.5px] border-foreground/75 pb-[2px] group-hover:text-blue-400 group-hover:border-blue-400 transition-colors">
										Let&apos;s Discuss
									</span>
									<ArrowUpRight size={16} strokeWidth={2.5} className="group-hover:text-blue-400 transition-colors mb-0.5" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
