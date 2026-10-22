"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-black/20">
      <motion.div
        className="h-full bg-gradient-to-r from-[#d49a37] via-[#f7d488] to-[#f0c265] origin-left shadow-[0_0_12px_rgba(240,194,101,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
