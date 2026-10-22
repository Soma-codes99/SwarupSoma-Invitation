"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Replace these with actual images when available
const photos = [
  "/hero-bg.png",
  "/hero-bg.png",
  "/hero-bg.png",
  "/hero-bg.png",
  "/hero-bg.png",
  "/hero-bg.png",
];

export default function Gallery() {
  return (
    <section className="w-full py-24 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f0c265]/15 border border-[#f0c265]/35 text-[#f6d58e] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Moments
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#fae5b9] drop-shadow-md mb-4">Before the Wedding</h2>
          <p className="text-[#fff8f5]/85 max-w-xl mx-auto text-sm sm:text-base">
            A few glimpses of our journey so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl border border-[#d4af37]/40 shadow-xl ${
                index % 3 === 0 ? "row-span-2 col-span-2 md:col-span-1" : "aspect-square"
              }`}
            >
              <img
                src={photo}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
