"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-[#830508] text-[#fff8f5] text-center px-4 border-t border-[#d4af37]/30">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.png"
          alt="Swarup and Somashree"
          className="w-full h-full object-cover object-[center_35%] opacity-25 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#830508] via-[#5a0406]/75 to-transparent"></div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center space-y-6 sm:space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-6xl font-serif text-[#f0c265] italic drop-shadow-lg">
          Can&apos;t wait to celebrate with you.
        </h2>

        <p className="text-sm md:text-xl tracking-[0.25em] uppercase font-light text-[#fae5b9]">
          Swarup &amp; Somashree
        </p>

        <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#f0c265] to-transparent my-6"></div>

        <p className="font-serif text-2xl md:text-4xl text-[#fae5b9] drop-shadow-md">
          See you at the mandap. ❤️
        </p>
      </motion.div>
    </footer>
  );
}
