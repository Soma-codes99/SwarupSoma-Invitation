"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Sparkles, ChevronDown } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  venue?: string;
  locationUrl?: string;
  description: string;
  dressCode?: string;
  note?: string;
}

const events: EventItem[] = [
  {
    id: "haldi",
    title: "Haldi",
    date: "26th November 2026",
    time: "8:30 AM",
    venue: "Patrasayer, Bankura",
    locationUrl: "https://maps.app.goo.gl/SJVMxq4fndBLMyCv7",
    description: "Sunshine, colour, mishti, and getting a little too yellow for our own good. 😂",
    dressCode: "Ladies in shades of Yellow 💛, Men in shades of Red or Yellow ❤️💛",
  },
  {
    id: "wedding",
    title: "The Wedding",
    date: "26th November 2026",
    time: "6:00 PM",
    venue: "Rabindra Bhavan, Garia",
    locationUrl: "https://maps.app.goo.gl/XKovm13zbVpNnuw36",
    description: "The big one. The “this is actually happening” moment. And the day we officially become amra. ❤️",
    dressCode: "Bring your best ethnic fit. (Time to serve looks. 😌) ✨",
  },
  {
    id: "vadhu-varaan",
    title: "Vadhu Varaan",
    date: "27th November 2026",
    time: "1:00 PM",
    venue: "Patrasayer, Bankura",
    locationUrl: "https://maps.app.goo.gl/SJVMxq4fndBLMyCv7",
    description: "Join us welcoming the new Bride and Groom in our home with lots of funny rituals.",
  },
  {
    id: "reception",
    title: "Reception",
    date: "28th November 2026",
    time: "6:00 PM",
    venue: "Patrasayer, Bankura",
    locationUrl: "https://maps.app.goo.gl/SJVMxq4fndBLMyCv7",
    description: "Enjoy authentic Bengali dishes, have fun and shower your blessings on the newly wed couple.",
    dressCode: "Come as you like (There will be photo session, so keep that in mind 😅)",
  },
];

export default function Events() {
  // All open by default or toggleable
  const [openEvents, setOpenEvents] = useState<number[]>([0, 1, 2, 3]);

  const toggleEvent = (index: number) => {
    setOpenEvents((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full py-24 sm:py-32 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f0c265]/15 border border-[#f0c265]/35 text-[#f6d58e] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Wedding Itinerary
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#fae5b9] drop-shadow-md mb-3">
            The Celebrations
          </h2>
          <p className="text-[#fff8f5]/85 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We can’t wait to share these special moments with you.
          </p>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 items-start max-w-7xl mx-auto">
          {events.map((event, index) => {
            const isOpen = openEvents.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.8 }}
                onClick={() => toggleEvent(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleEvent(index);
                  }
                }}
                className={`gold-sheen-card bg-white/95 backdrop-blur-xs p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border flex flex-col justify-between text-center relative group cursor-pointer select-none ${
                  isOpen
                    ? "border-[#d4af37]/70 ring-1 ring-[#d4af37]/35 scale-[1.01]"
                    : "border-[#d4af37]/30 hover:border-[#d4af37]/60"
                }`}
              >
                {/* Top Decorative Gold Line */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary group-hover:h-2 transition-all duration-300" />

                <div>
                  {/* Event Title & Header */}
                  <div className="mt-2 mb-3 flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-serif text-primary font-medium text-left">
                      {event.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-secondary shrink-0 p-1.5 rounded-full bg-secondary/10"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Always-visible Date & Time Preview */}
                  <div className="space-y-1.5 text-xs text-foreground/80 text-left mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span className="font-semibold text-foreground/90">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-secondary" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Expandable Details Container */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="event-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden text-left"
                      >
                        {/* Event Description */}
                        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed pt-3 border-t border-secondary/15 mb-3">
                          {event.description}
                        </p>

                        {/* Dress Code Box */}
                        {event.dressCode && (
                          <div className="bg-[#fff8f5] border border-secondary/25 rounded-xl p-3 mb-3">
                            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-secondary uppercase tracking-wider mb-1">
                              <Sparkles className="w-3 h-3 text-secondary" />
                              <span>Dress Code</span>
                            </div>
                            <p className="text-xs text-foreground/90 font-medium leading-snug">
                              {event.dressCode}
                            </p>
                          </div>
                        )}

                        {/* Venue details */}
                        {event.venue && (
                          <div className="flex items-start gap-2 text-xs text-foreground/80 mb-3 pt-1">
                            <MapPin className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                            <span className="leading-snug">{event.venue}</span>
                          </div>
                        )}

                        {/* Special Note (if any) */}
                        {event.note && (
                          <p className="text-xs font-serif italic text-primary/90 bg-primary/5 rounded-lg p-2 mb-3 border border-primary/10">
                            {event.note}
                          </p>
                        )}

                        {/* View Location Action Link */}
                        {event.locationUrl && (
                          <div className="pt-2 border-t border-secondary/15">
                            <a
                              href={event.locationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary/5 hover:bg-primary text-primary hover:text-white transition-all duration-300 font-medium text-xs uppercase tracking-wider group/link"
                            >
                              <span>View Location</span>
                              <span className="transform group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                            </a>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isOpen && (
                    <span className="inline-block pt-2 text-[11px] text-secondary tracking-wider uppercase font-medium">
                      Click to reveal &rarr;
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
