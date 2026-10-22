"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface WeddingDetailCardProps {
  id: string;
  icon: React.ReactNode;
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  footerNote: string;
  variant?: "gold" | "pink" | "yellow" | "blue";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const variantStyles = {
  gold: {
    border: "border-t-[#f0c265]",
    iconBg: "bg-[#f0c265]/20 text-[#830508]",
    tagBg: "bg-[#f0c265]/15 text-[#830508] border-[#f0c265]/35",
    badge: "bg-[#f0c265]/20 text-[#830508] border-[#f0c265]/40",
  },
  pink: {
    border: "border-t-[#e01e5a]",
    iconBg: "bg-[#e01e5a]/15 text-[#c01748]",
    tagBg: "bg-[#e01e5a]/10 text-[#c01748] border-[#e01e5a]/25",
    badge: "bg-[#e01e5a]/15 text-[#c01748] border-[#e01e5a]/30",
  },
  yellow: {
    border: "border-t-[#eab308]",
    iconBg: "bg-[#eab308]/20 text-[#9a6a00]",
    tagBg: "bg-[#eab308]/15 text-[#9a6a00] border-[#eab308]/30",
    badge: "bg-[#eab308]/15 text-[#9a6a00] border-[#eab308]/35",
  },
  blue: {
    border: "border-t-[#3b82f6]",
    iconBg: "bg-[#3b82f6]/15 text-[#1d4ed8]",
    tagBg: "bg-[#3b82f6]/10 text-[#1d4ed8] border-[#3b82f6]/25",
    badge: "bg-[#3b82f6]/15 text-[#1d4ed8] border-[#3b82f6]/30",
  },
};

/**
 * A responsive, theme-adaptive wedding detail card with 3D tilt effect on hover.
 */
export const AnimatedDetailCard = ({
  icon,
  category,
  title,
  subtitle,
  tags,
  footerNote,
  variant = "gold",
  children,
  className,
  onClick,
  isActive = true,
}: WeddingDetailCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cardRef = React.useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isActive) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Transform mouse position into a 3D rotation
  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);

  // Apply spring physics for a smooth return effect
  const springConfig = { stiffness: 300, damping: 22, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const currentVariant = variantStyles[variant] || variantStyles.gold;

  return (
    <motion.div
      layout
      onClick={onClick}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full transform-gpu cursor-pointer overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-lg transition-shadow duration-300 hover:shadow-2xl select-none",
        "border-t-4",
        currentVariant.border,
        "border-x border-b border-black/5",
        className
      )}
      aria-label={`Wedding Detail: ${title}`}
      tabIndex={0}
    >
      <div style={{ transform: "translateZ(22px)" }} className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full shadow-xs",
                currentVariant.iconBg
              )}
            >
              {icon}
            </div>
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] border",
                currentVariant.badge
              )}
            >
              {category}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#4a1c1c] tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-[#9b2226] mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="text-[#4a1c1c]/85 text-sm sm:text-base leading-relaxed pt-1">
          {children}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={cn(
                "rounded-full px-2.5 py-0.5 text-xs font-medium border",
                currentVariant.tagBg
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-black/5 text-right text-xs text-[#830508]/75 font-medium">
          {footerNote}
        </div>
      </div>
    </motion.div>
  );
};
