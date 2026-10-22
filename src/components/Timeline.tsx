"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    title: "The Beginning",
    description: `A Facebook poem blog, 
a few likes, and 2015–16. Yep, that long ago. 😂
We started by liking each other's posts and somehow ended up liking each other.`,
  },
  {
    title: "The First Date",
    description: `Nandan. A movie. Chicken rolls at Saima. Brownie with ice cream at Beans and Bites Cafe.
Basically, very pocket-friendly Bengali date energy. ❤️`,
  },
  {
    title: "The Plot Twist",
    description: `We were supposed to be opposites.
Different personalities, different quirks, different ways of doing things.
And yet we clicked.
Turns out, sometimes the plot twist is the best part of the story.`,
  },
  {
    title: "The “We're Doing This”",
    description: `Families met. We acted very nonchalant.
There were agreements, disagreements, sweets, snacks, and then—
officially unofficially, unofficially officially, it was official. ❤️`,
  },
  {
    title: "The Wedding",
    description: `26th November 2026.
Adda, mishti, bhalobasha — and finally, officially amra. ❤️
A lifetime together, with an unlimited “chol ghurte jai” privileges.`,
  },
];

export default function Timeline() {
  return (
    <section className="w-full py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Our Story ❤️</h2>
        </motion.div>

        <div className="relative pb-8">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-secondary/30 -translate-x-1/2"></div>
          {/* Left Line for Mobile */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-secondary/30 -translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center justify-between w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* The Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary -translate-x-1/2 ring-4 ring-background z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full pl-12 md:pl-0 md:w-5/12 ${
                      isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-serif text-primary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
