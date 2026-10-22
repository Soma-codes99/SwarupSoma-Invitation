"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Heart } from "lucide-react";

export default function People() {
  const [openSides, setOpenSides] = useState<string[]>(["groom", "bride"]);

  const toggleSide = (side: string) => {
    setOpenSides((prev) =>
      prev.includes(side) ? prev.filter((s) => s !== side) : [...prev, side]
    );
  };

  return (
    <section className="w-full py-24 sm:py-32 px-4 bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f0c265]/15 border border-[#f0c265]/35 text-[#f6d58e] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Wedding Entourage
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#fae5b9] drop-shadow-md mb-3">
            Our People
          </h2>
          <p className="text-[#fff8f5]/85 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            The family and friends who have made our lives so special and stand beside us today.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#f6d58e]/90 flex items-center justify-center gap-1.5 mt-2">
            <Sparkles className="w-3.5 h-3.5 text-[#f0c265]" />
            <span>Click either side to expand or collapse</span>
          </p>
        </motion.div>

        {/* Two-Column Cards: Groom & Bride */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* The Groom's Side */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => toggleSide("groom")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleSide("groom");
              }
            }}
            className={`gold-sheen-card p-7 sm:p-9 rounded-2xl bg-white/95 backdrop-blur-xs border transition-all duration-300 cursor-pointer select-none hover:-translate-y-1.5 ${
              openSides.includes("groom")
                ? "border-[#d4af37]/70 shadow-2xl ring-1 ring-[#d4af37]/35 scale-[1.01]"
                : "border-[#d4af37]/30 shadow-md hover:border-[#d4af37]/60"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-semibold block mb-1">
                  Swarup&apos;s Family &amp; Friends
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-primary font-medium flex items-center gap-2">
                  <span>The Groom&apos;s Side</span>
                  <Heart className="w-4 h-4 text-secondary fill-secondary/20" />
                </h3>
              </div>
              <motion.div
                animate={{ rotate: openSides.includes("groom") ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-secondary shrink-0 p-1.5 rounded-full bg-secondary/10"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {openSides.includes("groom") && (
                <motion.div
                  key="groom-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 mt-4 border-t border-secondary/15 space-y-6 text-left">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold block mb-1">
                        Parents of the Groom
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-primary font-medium">
                        Subrata Kr Chandra &amp; Rupali Chandra
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold block mb-1">
                        Siblings
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-primary font-medium">
                        Sayandeep Chandra
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold block mb-1">
                        Groomsman
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-primary font-medium">
                        Gourinath
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!openSides.includes("groom") && (
              <span className="inline-block pt-3 text-[11px] text-secondary tracking-wider uppercase font-medium">
                Click to reveal &rarr;
              </span>
            )}
          </motion.div>

          {/* The Bride's Side */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => toggleSide("bride")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleSide("bride");
              }
            }}
            className={`gold-sheen-card p-7 sm:p-9 rounded-2xl bg-white/95 backdrop-blur-xs border transition-all duration-300 cursor-pointer select-none hover:-translate-y-1.5 ${
              openSides.includes("bride")
                ? "border-[#d4af37]/70 shadow-2xl ring-1 ring-[#d4af37]/35 scale-[1.01]"
                : "border-[#d4af37]/30 shadow-md hover:border-[#d4af37]/60"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-semibold block mb-1">
                  Somashree&apos;s Family &amp; Friends
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-primary font-medium flex items-center gap-2">
                  <span>The Bride&apos;s Side</span>
                  <Heart className="w-4 h-4 text-secondary fill-secondary/20" />
                </h3>
              </div>
              <motion.div
                animate={{ rotate: openSides.includes("bride") ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-secondary shrink-0 p-1.5 rounded-full bg-secondary/10"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {openSides.includes("bride") && (
                <motion.div
                  key="bride-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 mt-4 border-t border-secondary/15 space-y-6 text-left">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold block mb-1">
                        Parents of the Bride
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-primary font-medium">
                        Sankar Ch Roy &amp; Rinku Bardhan Roy
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold block mb-1">
                        Siblings
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-primary font-medium">
                        Saumyajit Roy
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold block mb-1">
                        Bridesmaids
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-primary font-medium">
                        Teekshna, Tannaz &amp; Tisha
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!openSides.includes("bride") && (
              <span className="inline-block pt-3 text-[11px] text-secondary tracking-wider uppercase font-medium">
                Click to reveal &rarr;
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
