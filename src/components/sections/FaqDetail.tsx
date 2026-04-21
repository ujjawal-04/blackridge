"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    id: "001",
    question: "Can I update content on my website or app after it's launched?",
    answer: "Yes. We offer integration of flexible CMS solutions so you can easily manage and update your content without relying on developers."
  },
  {
    id: "002",
    question: "What content management systems do you work with?",
    answer: "We work with modern CMS platforms like Sanity, Contentful, and Strapi — chosen based on your team's workflow and technical requirements."
  },
  {
    id: "003",
    question: "What happens after I submit the Get a Quote form?",
    answer: "We review your requirements and get back within 24 hours. From there, we schedule a discovery call to understand your goals, scope, and timelines."
  },
  {
    id: "004",
    question: "Do you offer hosting and maintenance services after the website is completed?",
    answer: "Yes. We offer maintenance, performance optimization, and infrastructure support to ensure your system remains stable and scalable post-launch."
  },
  {
    id: "005",
    question: "How long does it take to build a website?",
    answer: "Most projects take 4–8 weeks depending on complexity. Larger systems like eCommerce platforms or ERP tools may take longer."
  },
  {
    id: "006",
    question: "Will I have input in the design of my website?",
    answer: "Absolutely. We run collaborative design sprints where you review and approve each stage — from wireframes to final UI — before development begins."
  }
];

export const FaqDetail = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="pb-8 md:pb-12 lg:pt-10">
      <div className="flex flex-col">

        {/* Accordion full-width */}
        <div className="border-t border-dashed border-border/60">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-dashed border-border/60">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center gap-4 py-5 text-left group focus:outline-none"
                >
                  {/* Number + Question stacked */}
                  <div className="flex-1 min-w-0">
                    <p className="mono text-foreground/40 text-[10px] font-medium tracking-[0.15em] uppercase mb-1.5">
                      ■ {faq.id}
                    </p>
                    <p className={`text-sm md:text-[15px] font-normal leading-snug transition-colors duration-200 ${isOpen ? 'text-blue-400' : 'text-foreground/85 group-hover:text-foreground'}`}>
                      {faq.question}
                    </p>
                  </div>

                  {/* Toggle */}
                  <div className="mono text-foreground/40 text-xs shrink-0 ml-4 group-hover:text-foreground/70 transition-colors">
                    {isOpen ? '[×]' : '[+]'}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{
                    height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.2, ease: 'easeOut' },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 pr-10">
                    <p className="text-foreground/55 text-sm md:text-[15px] font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
