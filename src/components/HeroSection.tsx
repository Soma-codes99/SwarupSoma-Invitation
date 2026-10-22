"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronDown } from "lucide-react";
import { AlponaCorner, BengaliKalkaDivider, AuspiciousLotus } from "./BengaliOrnaments";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Wedding Date: 26th November 2026, 18:00 IST (Evening Lagna / Ceremony)
    const targetDate = new Date("2026-11-26T18:00:00+05:30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.dispatchEvent(new CustomEvent("hero:snap-next"));
  };


  const addToCalendar = () => {
    const title = encodeURIComponent("Wedding of Swarup & Somashree");
    const details = encodeURIComponent("Join us to celebrate the joyous Bengali wedding of Swarup and Somashree!");
    const location = encodeURIComponent("Patrasayer, West Bengal, India");
    const startDate = "20261126T123000Z";
    const endDate = "20261126T183000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="hero-section"
      className="relative w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex flex-col items-center justify-between overflow-hidden bg-[#830508] text-[#fff8f5] py-4 sm:py-6 px-4 select-none"
    >
      {/* Background Image Layer - High Visibility & Natural Color */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.png"
          alt="Swarup and Somashree"
          className="w-full h-full object-cover object-[center_35%] opacity-90 brightness-[0.95] contrast-[1.05] scale-105 transform transition-transform duration-1000 ease-out"
        />
        {/* Soft atmospheric vignettes tuned to match the royal crimson of site-bg.jpg (#830508) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#830508] via-[#830508]/35 to-[#830508]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(131,5,8,0.15)_0%,_rgba(100,4,7,0.45)_55%,_rgba(131,5,8,0.92)_100%)]" />
        {/* Seamless bottom blend into the rest of the site */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent via-[#830508]/75 to-[#830508] pointer-events-none z-10" />
      </div>

      {/* Traditional Bengali Alpona Corner Accents */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <AlponaCorner className="absolute top-3 left-3 sm:top-6 sm:left-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-[#f0c265]/75" />
        <AlponaCorner className="absolute top-3 right-3 sm:top-6 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-[#f0c265]/75 rotate-90" />
        <AlponaCorner className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-[#f0c265]/75 -rotate-90" />
        <AlponaCorner className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-[#f0c265]/75 rotate-180" />
      </div>

      {/* Subtle Ornate Inner Border Frame */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-[#f0c265]/20 rounded-2xl pointer-events-none z-10 hidden sm:block" />

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto pt-2 sm:pt-4 pb-1">
        {/* Bengali Wedding Inscription: শুভ বিবাহ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mb-2 sm:mb-4"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#5a0406]/75 backdrop-blur-md border border-[#f0c265]/40 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0c265] animate-ping" />
            <span className="font-bengali text-lg sm:text-2xl md:text-3xl tracking-widest text-[#f0c265] font-medium drop-shadow-md">
              ॥ শুভ বিবাহ ॥
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0c265] animate-ping" />
          </div>

          <p className="mt-3 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.35em] text-[#e8c89b] font-light drop-shadow">
            Together with their families
          </p>
        </motion.div>

        {/* Couple Names in Grand Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative my-1 sm:my-2"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight font-normal leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            <span className="gold-gradient-text block hover:brightness-110 transition-all duration-300">
              Swarup
            </span>
            <span className="inline-flex items-center justify-center my-0.5 sm:my-1">
              <span className="text-2xl sm:text-3xl md:text-4xl text-[#e8b965] font-serif italic px-3 opacity-90">
                &amp;
              </span>
            </span>
            <span className="gold-gradient-text block hover:brightness-110 transition-all duration-300">
              Somashree
            </span>
          </h1>
        </motion.div>

        {/* Traditional Bengali Kalka Center Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-2 sm:my-3 w-56 sm:w-72 md:w-80 text-[#f0c265]/80"
        >
          <BengaliKalkaDivider className="w-full h-auto" />
        </motion.div>

        {/* Wedding Date & Bengali Calendar Tithi */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-1 mb-4 sm:mb-6"
        >
          <p className="text-base sm:text-xl md:text-2xl font-serif tracking-[0.2em] text-[#fff2be] uppercase drop-shadow-md">
            Thursday, 26th November 2026
          </p>
          <p className="text-sm sm:text-base font-bengali tracking-widest text-[#dfb15b] drop-shadow">
            ৯ই অগ্রহায়ণ, ১৪৩৩
          </p>
          <p className="text-xs sm:text-sm tracking-widest text-[#dfb15b]/90 uppercase">
            Patrasayer, West Bengal
          </p>
        </motion.div>

        {/* Live Bengali Wedding Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-xl px-2 mb-4 sm:mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#f0c265]/50" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#f0c265]/90 font-medium">
              Auspicious Celebration Begins In
            </p>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#f0c265]/50" />
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {/* DAYS */}
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-[#5a0406]/70 backdrop-blur-md gold-shimmer-border transition-transform duration-300 hover:scale-105">
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2be] drop-shadow-lg tabular-nums">
                {hasMounted ? timeLeft.days : "00"}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#f0c265] mt-1">
                Days
              </span>
              <span className="text-[9px] sm:text-[10px] font-bengali text-[#dfb15b]/70">
                দিন
              </span>
            </div>

            {/* HOURS */}
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-[#5a0406]/70 backdrop-blur-md gold-shimmer-border transition-transform duration-300 hover:scale-105">
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2be] drop-shadow-lg tabular-nums">
                {hasMounted ? timeLeft.hours.toString().padStart(2, "0") : "00"}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#f0c265] mt-1">
                Hours
              </span>
              <span className="text-[9px] sm:text-[10px] font-bengali text-[#dfb15b]/70">
                ঘণ্টা
              </span>
            </div>

            {/* MINUTES */}
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-[#5a0406]/70 backdrop-blur-md gold-shimmer-border transition-transform duration-300 hover:scale-105">
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2be] drop-shadow-lg tabular-nums">
                {hasMounted ? timeLeft.minutes.toString().padStart(2, "0") : "00"}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#f0c265] mt-1">
                Mins
              </span>
              <span className="text-[9px] sm:text-[10px] font-bengali text-[#dfb15b]/70">
                মিনিট
              </span>
            </div>

            {/* SECONDS */}
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-[#5a0406]/70 backdrop-blur-md gold-shimmer-border transition-transform duration-300 hover:scale-105">
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2be] drop-shadow-lg tabular-nums">
                {hasMounted ? timeLeft.seconds.toString().padStart(2, "0") : "00"}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#f0c265] mt-1">
                Secs
              </span>
              <span className="text-[9px] sm:text-[10px] font-bengali text-[#dfb15b]/70">
                সেকেন্ড
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick Interactive Actions: Save The Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 z-30"
        >
          <button
            onClick={addToCalendar}
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#d49a37] via-[#f7d488] to-[#c78824] text-[#3a060a] font-serif font-semibold text-xs sm:text-sm tracking-widest uppercase shadow-lg shadow-amber-950/50 hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#3a060a]" />
            <span>Save The Date</span>
          </button>
        </motion.div>
      </div>

      {/* Royal Bengali Scroll Indicator */}
      <motion.div
        className="relative z-20 flex flex-col items-center cursor-pointer mt-2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        onClick={scrollToNext}
      >
        <AuspiciousLotus className="w-6 h-5 text-[#f0c265] mb-1 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#e8c89b]/80 group-hover:text-[#f0c265] transition-colors">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-[#f0c265] mt-1"
        >
          <ChevronDown className="w-4 h-4 opacity-80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
