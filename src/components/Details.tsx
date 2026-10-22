"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Coffee, ExternalLink } from "lucide-react";
import { AnimatedDetailCard } from "@/components/ui/animated-detail-card";

interface DetailItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: React.ReactNode;
  variant: "gold" | "yellow" | "pink";
  tags: string[];
  footerNote: string;
  content: React.ReactNode;
}

const initialDetails: DetailItem[] = [
  {
    id: "wedding-venue",
    title: "Wedding",
    subtitle: "Rabindra Bhavan, Garia",
    category: "Main Ceremony",
    icon: <MapPin className="w-5 h-5" />,
    variant: "gold",
    tags: ["Rabindra Bhavan", "Garia, Kolkata", "Wedding", "Directions"],
    footerNote: "26th Nov 2026 • 6:00 PM",
    content: (
      <div className="space-y-3">
        <p className="text-[#4a1c1c]/85 text-sm sm:text-base leading-relaxed">
          <strong className="text-[#830508] font-serif font-bold text-base block">
            Rabindra Bhavan, Garia
          </strong>
          Kolkata, West Bengal
        </p>
        <a
          href="https://maps.app.goo.gl/XKovm13zbVpNnuw36"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#830508] text-[#fae5b9] font-medium text-xs sm:text-sm hover:bg-[#680305] hover:shadow-md transition-all group"
        >
          <span>Get Directions</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    ),
  },
  {
    id: "patrasayer-venue",
    title: "Patrasayer",
    subtitle: "Patrasayer, Bankura",
    category: "Haldi & Reception",
    icon: <MapPin className="w-5 h-5" />,
    variant: "yellow",
    tags: ["Patrasayer", "Bankura", "Haldi", "Reception", "Directions"],
    footerNote: "26th, 27th & 28th Nov 2026",
    content: (
      <div className="space-y-3">
        <p className="text-[#4a1c1c]/85 text-sm sm:text-base leading-relaxed">
          <strong className="text-[#830508] font-serif font-bold text-base block">
            Patrasayer, Bankura
          </strong>
          West Bengal
        </p>
        <a
          href="https://maps.app.goo.gl/SJVMxq4fndBLMyCv7"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#830508] text-[#fae5b9] font-medium text-xs sm:text-sm hover:bg-[#680305] hover:shadow-md transition-all group"
        >
          <span>Get Directions</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    ),
  },
  {
    id: "tips",
    title: "Things to Know",
    subtitle: "Food, Adda & Celebration",
    category: "Good to Know",
    icon: <Coffee className="w-5 h-5" />,
    variant: "pink",
    tags: ["Bengali Feast", "Loud Adda", "Photo Sessions", "Unlimited Sweets"],
    footerNote: "Good vibes & appetite required ❤️",
    content: (
      <p className="text-[#4a1c1c]/85 text-sm sm:text-base leading-relaxed">
        Expect lots of authentic Bengali delicacies, loud adda, and endless photo sessions. Bring your good vibes, dancing shoes, and a big appetite! ❤️
      </p>
    ),
  },
];

export default function Details() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f0c265]/15 border border-[#f0c265]/35 text-[#f6d58e] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Guest Guide
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fae5b9] drop-shadow-md">
            Wedding Details
          </h2>
        </motion.div>

        {/* Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {initialDetails.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="flex"
            >
              <AnimatedDetailCard
                id={item.id}
                icon={item.icon}
                category={item.category}
                title={item.title}
                subtitle={item.subtitle}
                tags={item.tags}
                footerNote={item.footerNote}
                variant={item.variant}
                className="h-full flex flex-col justify-between"
              >
                {item.content}
              </AnimatedDetailCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
