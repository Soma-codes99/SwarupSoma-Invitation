"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

interface HeroCardSliderProps {
  children: React.ReactNode;
}

/**
 * HeroCardSlider
 * 
 * Implements a true full-screen vertical card slide for the Hero Section.
 * 
 * Behaviors:
 * - Hero Section = 100vh full-screen card.
 * - One scroll/swipe gesture = one complete smooth transition to next section.
 * - Impossible to stop halfway or leave Hero partially visible.
 * - Scrolling back up to the top and scrolling up snaps smoothly back to the Hero.
 * - Silky smooth 60fps/120fps hardware-accelerated cubic-bezier transition.
 * - Existing Hero design, layout, animations, and content 100% preserved.
 */
export default function HeroCardSlider({ children }: HeroCardSliderProps) {
  const [isHeroActive, setIsHeroActive] = useState(true);
  const isAnimating = useRef(false);

  // Transition to content sections
  const transitionToContent = () => {
    if (isAnimating.current || !isHeroActive) return;
    isAnimating.current = true;
    setIsHeroActive(false);

    setTimeout(() => {
      isAnimating.current = false;
    }, 850);
  };

  // Transition back to Hero card
  const transitionToHero = () => {
    if (isAnimating.current || isHeroActive) return;
    isAnimating.current = true;

    // Reset window scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsHeroActive(true);

    setTimeout(() => {
      isAnimating.current = false;
    }, 850);
  };

  // Lock body scroll while on Hero card so partial background scroll is impossible
  useEffect(() => {
    if (isHeroActive) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isHeroActive]);

  // Handle gestures
  useEffect(() => {
    // 1. Mouse wheel gestures (Desktop & Laptop trackpads)
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      if (isHeroActive) {
        // While on Hero, any downward scroll gesture triggers transition to content
        if (e.deltaY > 5) {
          e.preventDefault();
          transitionToContent();
        } else if (e.deltaY < 0) {
          e.preventDefault();
        }
        return;
      }

      // While in content: if at top of page and user scrolls UP, snap back to Hero
      if (!isHeroActive && window.scrollY <= 5 && e.deltaY < -12) {
        e.preventDefault();
        transitionToHero();
      }
    };

    // 2. Touch swipe gestures (Mobile & Tablet)
    let touchStartY = 0;
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current || e.changedTouches.length !== 1) return;
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY - touchEndY; // positive = swipe UP (scroll down)
      const deltaX = touchStartX - touchEndX;

      // Ignore predominantly horizontal gestures
      if (Math.abs(deltaY) < Math.abs(deltaX) && Math.abs(deltaX) > 25) return;

      if (isHeroActive) {
        // Swiping UP on Hero -> Slide to content
        if (deltaY > 30) {
          transitionToContent();
        }
      } else {
        // At the top of content, swiping DOWN -> Snap back to Hero
        if (window.scrollY <= 8 && deltaY < -35) {
          transitionToHero();
        }
      }
    };

    // 3. Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating.current) return;

      if (isHeroActive) {
        if (["ArrowDown", "PageDown", " "].includes(e.key)) {
          e.preventDefault();
          transitionToContent();
        }
      } else if (window.scrollY <= 5) {
        if (["ArrowUp", "PageUp"].includes(e.key)) {
          e.preventDefault();
          transitionToHero();
        }
      }
    };

    // 4. Custom events from Hero interactive buttons
    const handleSnapNext = () => {
      transitionToContent();
    };

    const handleSnapHero = () => {
      transitionToHero();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("hero:snap-next", handleSnapNext);
    window.addEventListener("hero:snap-hero", handleSnapHero);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hero:snap-next", handleSnapNext);
      window.removeEventListener("hero:snap-hero", handleSnapHero);
    };
  }, [isHeroActive]);

  return (
    <>
      {/* Full-Screen Vertical Card Slide for Hero */}
      <motion.div
        initial={false}
        animate={{
          y: isHeroActive ? "0%" : "-100%",
        }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1], // Apple-style smooth deceleration curve
        }}
        className={`fixed inset-0 w-full h-[100dvh] z-40 overflow-hidden shadow-2xl ${
          isHeroActive ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ willChange: "transform" }}
      >
        <HeroSection />
      </motion.div>

      {/* Main Content Sections (Starts cleanly at top when Hero slides up) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </>
  );
}
