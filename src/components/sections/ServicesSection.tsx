"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Zap,
  Database,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full-stack web platforms built for performance, security, and scale. From MVPs to enterprise software.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    border: "hover:border-blue-500/30",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile experiences on iOS and Android that users love.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Intelligent features — LLMs, recommendation engines, and custom ML models woven into your product.",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
    border: "hover:border-pink-500/30",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "We audit and turbocharge your existing stack — measurably faster load times and reduced costs.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    border: "hover:border-amber-500/30",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Robust, scalable backend services and RESTful or GraphQL APIs designed for reliability.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description:
      "CI/CD pipelines, cloud infrastructure, and enterprise-grade security baked into every delivery.",
    gradient: "from-sky-500/20 to-blue-500/20",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10",
    border: "hover:border-sky-500/30",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Every layer of your stack,{" "}
            <span className="gradient-text">covered</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            We don&apos;t do cookie-cutter. Every engagement starts with deep
            discovery and ends with software your team is proud of.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.09 } }, hidden: {} }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`group relative glass-card p-7 cursor-default overflow-hidden border border-white/[0.07] ${service.border} transition-all duration-300`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>

                  <h3 className="text-base font-medium text-white mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
