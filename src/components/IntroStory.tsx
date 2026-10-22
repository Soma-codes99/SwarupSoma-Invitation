"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronDown, Sparkles } from "lucide-react";

const storyChapters = [
  {
    number: "01",
    tag: "2015 – 2016",
    title: "The Beginning",
    description: `A Facebook poem blog, 
a few likes, and 2015–16. Yep, that long ago. 😂
We started by liking each other's posts and somehow ended up liking each other.`,
  },
  {
    number: "02",
    tag: "Kolkata Nostalgia",
    title: "The First Date",
    description: `Nandan. A movie. Chicken rolls at Saima. Brownie with ice cream at Beans and Bites Cafe.
Basically, very pocket-friendly Bengali date energy. ❤️`,
  },
  {
    number: "03",
    tag: "Opposites Attract",
    title: "The Plot Twist",
    description: `We were supposed to be opposites.
Different personalities, different quirks, different ways of doing things.
And yet we clicked.
Turns out, sometimes the plot twist is the best part of the story.`,
  },
  {
    number: "04",
    tag: "The Families Meet",
    title: "The “We're Doing This”",
    description: `Families met. We acted very nonchalant.
There were agreements, disagreements, sweets, snacks, and then—
officially unofficially, unofficially officially, it was official. ❤️`,
  },
  {
    number: "05",
    tag: "26th November 2026",
    title: "The Wedding",
    description: `26th November 2026.
Adda, mishti, bhalobasha — and finally, officially amra. ❤️
A lifetime together, with an unlimited “chol ghurte jai” privileges.`,
  },
];

export default function IntroStory() {
  // All chapters collapsed by default, expanding only when clicked
  const [openChapters, setOpenChapters] = useState<number[]>([]);

  const toggleChapter = (index: number) => {
    setOpenChapters((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="intro-story"
      className="w-full py-24 sm:py-32 px-4 flex flex-col items-center justify-center bg-transparent text-foreground relative overflow-hidden"
    >
      {/* Intro Narrative Headline */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center space-y-6 mb-16 sm:mb-20"
      >
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <span className="w-10 h-[1px] bg-[#f0c265]/50" />
          <Heart className="w-4 h-4 text-[#f0c265] fill-[#f0c265]/30" />
          <span className="w-10 h-[1px] bg-[#f0c265]/50" />
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif leading-relaxed text-[#fae5b9] drop-shadow-md">
          Two people.<br />
          <span className="italic text-[#f0c265]">One ridiculously long story.</span><br />
          And finally... a wedding.
        </h2>

        <p className="text-xs uppercase tracking-[0.25em] text-[#fae5b9]/85 flex items-center justify-center gap-1.5 pt-2">
          <Sparkles className="w-3.5 h-3.5 text-[#f0c265]" />
          <span>Click any chapter below to reveal our story</span>
        </p>
      </motion.div>

      {/* Story Timeline Container */}
      <div className="w-full max-w-3xl mx-auto relative pb-8">
        {/* Central decorative line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f0c265]/60 via-[#f0c265]/25 to-[#f0c265]/60 md:-translate-x-1/2" />

        <div className="space-y-10 sm:space-y-14">
          {storyChapters.map((chapter, index) => {
            const isEven = index % 2 === 0;
            const isOpen = openChapters.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex items-center justify-between w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop layout balancer */}
                <div className="hidden md:block w-5/12" />

                {/* Timeline Center Node */}
                <div 
                  onClick={() => toggleChapter(index)}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#830508] border-2 border-[#f0c265] flex items-center justify-center shadow-lg z-10 cursor-pointer hover:scale-125 transition-transform duration-300"
                >
                  <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isOpen ? "bg-[#f0c265] scale-125 ring-2 ring-[#f0c265]/40" : "bg-[#f0c265]/70 animate-ping opacity-75"}`} />
                </div>

                {/* Story Card - Click to Reveal */}
                <div
                  className={`w-full pl-14 md:pl-0 md:w-5/12 ${
                    isEven ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                  }`}
                >
                  <div
                    onClick={() => toggleChapter(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleChapter(index);
                      }
                    }}
                    className={`gold-sheen-card p-5 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer text-left select-none hover:-translate-y-1 ${
                      isOpen
                        ? "bg-white/95 border-[#d4af37]/60 shadow-xl ring-1 ring-[#d4af37]/30 scale-[1.01]"
                        : "bg-white/90 border-[#d4af37]/30 shadow-md hover:bg-white hover:border-[#d4af37]/60 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.25em] text-secondary font-semibold block mb-1">
                          {chapter.tag}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif text-primary font-medium">
                          {chapter.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-secondary/70 shrink-0 ml-2 p-1.5 rounded-full bg-secondary/10"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>

                    {/* Animated Collapsible Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-3 border-t border-secondary/15">
                            <p className="text-foreground/85 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans">
                              {chapter.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isOpen && (
                      <span className="inline-block mt-2 text-[11px] text-secondary/75 tracking-wider uppercase font-medium">
                        Click to reveal &rarr;
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
