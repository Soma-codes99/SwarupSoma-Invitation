"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RSVP() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate submission to Google Sheets / Backend
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="rsvp" className="w-full py-24 px-4 bg-[#5a0406]/40 backdrop-blur-sm border-t border-[#d4af37]/30 text-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f0c265]/15 border border-[#f0c265]/35 text-[#f6d58e] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Kindly Respond
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#fae5b9] drop-shadow-md mb-4">RSVP</h2>
          <p className="text-[#fff8f5]/85 text-sm sm:text-base">
            Please let us know if you&apos;ll be able to join us for the celebrations.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 p-12 rounded-2xl border border-[#d4af37]/40 backdrop-blur-md shadow-2xl"
          >
            <h3 className="text-3xl font-serif text-[#fae5b9] mb-4">Thank You!</h3>
            <p className="text-[#fff8f5]/90">Your RSVP has been received. We look forward to seeing you!</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 text-left p-6 sm:p-10 rounded-2xl bg-[#480305]/75 border border-[#d4af37]/35 backdrop-blur-md shadow-2xl"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-[#f6d58e] font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-4 bg-black/25 border border-[#d4af37]/30 rounded-xl text-[#fff8f5] placeholder:text-white/40 focus:outline-none focus:border-[#f0c265] transition-colors"
                placeholder="John & Jane Doe"
              />
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-wider text-[#f6d58e] font-medium block">Will you be joining us?</label>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-[#fff8f5]/90">
                  <input type="radio" name="attending" value="yes" required className="accent-[#f0c265] w-5 h-5" />
                  <span className="text-base">Happily, yes!</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-[#fff8f5]/90">
                  <input type="radio" name="attending" value="no" required className="accent-[#f0c265] w-5 h-5" />
                  <span className="text-base">Sadly, no :(</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="guests" className="text-xs uppercase tracking-wider text-[#f6d58e] font-medium">Number of Guests</label>
              <input
                type="number"
                id="guests"
                min="1"
                required
                className="w-full p-4 bg-white/10 border border-[#d4af37]/30 rounded-xl text-[#fff8f5] placeholder:text-white/40 focus:outline-none focus:border-[#f0c265] transition-colors"
                placeholder="2"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-[#f6d58e] font-medium">Any message for us?</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-4 bg-white/10 border border-[#d4af37]/30 rounded-xl text-[#fff8f5] placeholder:text-white/40 focus:outline-none focus:border-[#f0c265] transition-colors"
                placeholder="We can't wait to celebrate..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#f0c265] to-[#d4af37] text-[#5a0508] font-serif font-bold text-xl tracking-wider hover:brightness-110 shadow-xl transition-all rounded-xl disabled:opacity-50 cursor-pointer"
            >
              {status === "submitting" ? "Sending..." : "Send RSVP"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
