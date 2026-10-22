"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  spinSpeed: number;
  flip: number;
  flipSpeed: number;
  type: "rose" | "marigold" | "goldDust";
  opacity: number;
}

interface PetalCanvasProps {
  className?: string;
  isFixed?: boolean;
}

export default function PetalCanvas({ className, isFixed = false }: PetalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = isFixed ? window.innerWidth : canvas.offsetWidth);
    let height = (canvas.height = isFixed ? window.innerHeight : canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = isFixed ? window.innerWidth : canvas.offsetWidth;
      height = canvas.height = isFixed ? window.innerHeight : canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return () => window.removeEventListener("resize", handleResize);
    }

    // Optimize petal count for mobile vs desktop for 60/120fps smooth scrolling
    const isMobile = width < 768;
    const petalCount = isMobile ? 12 : Math.min(32, Math.floor(width / 40));
    const petals: Petal[] = [];

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;

    const onScroll = () => {
      if (!isMobile) return;
      isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const createPetal = (startY?: number): Petal => {
      const rand = Math.random();
      let type: Petal["type"] = "rose";
      if (rand > 0.65) type = "marigold";
      else if (rand < 0.2) type = "goldDust";

      return {
        x: Math.random() * width,
        y: startY !== undefined ? startY : Math.random() * height,
        size: type === "goldDust" ? Math.random() * 2.5 + 1.5 : (isMobile ? Math.random() * 8 + 8 : Math.random() * 12 + 10),
        speedY: type === "goldDust" ? Math.random() * 0.4 + 0.3 : Math.random() * 0.8 + 0.5,
        speedX: Math.random() * 0.6 - 0.3,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.025,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.025 + 0.01,
        type,
        opacity: type === "goldDust" ? Math.random() * 0.7 + 0.3 : Math.random() * 0.4 + 0.6,
      };
    };

    for (let i = 0; i < petalCount; i++) {
      petals.push(createPetal());
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      // Pseudo-3D tumble
      ctx.scale(Math.cos(p.flip), 1);
      ctx.globalAlpha = p.opacity;

      if (p.type === "goldDust") {
        // Glowing gold shimmer dust
        const rad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2);
        rad.addColorStop(0, "rgba(255, 230, 140, 0.95)");
        rad.addColorStop(0.5, "rgba(226, 192, 68, 0.6)");
        rad.addColorStop(1, "rgba(226, 192, 68, 0)");
        ctx.fillStyle = rad;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === "rose") {
        // Bengali wedding deep red/sindoor rose petal
        const gradient = ctx.createRadialGradient(0, -p.size * 0.2, 0, 0, 0, p.size);
        gradient.addColorStop(0, "#c1121f");
        gradient.addColorStop(0.6, "#8e0014");
        gradient.addColorStop(1, "#54000c");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.7, p.size * 0.9, p.size * 0.4, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.4, -p.size * 0.8, -p.size * 0.7, 0, -p.size);
        ctx.fill();

        // Subtle petal vein highlight
        ctx.strokeStyle = "rgba(255, 120, 130, 0.25)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.7);
        ctx.lineTo(0, p.size * 0.6);
        ctx.stroke();
      } else {
        // Auspicious Marigold (Genda Phool) petal - golden saffron
        const gradient = ctx.createRadialGradient(0, -p.size * 0.3, 0, 0, 0, p.size);
        gradient.addColorStop(0, "#ffd166");
        gradient.addColorStop(0.5, "#f77f00");
        gradient.addColorStop(1, "#d62828");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 1.1);
        ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.8, p.size * 0.5, p.size * 0.6, 0, p.size * 0.9);
        ctx.bezierCurveTo(-p.size * 0.5, p.size * 0.6, -p.size * 0.6, -p.size * 0.8, 0, -p.size * 1.1);
        ctx.fill();
      }

      ctx.restore();
    };

    let tick = 0;
    const render = () => {
      // On mobile, pause rendering during active touch scroll to give 100% GPU to scrolling
      if (!isMobile || !isScrolling) {
        ctx.clearRect(0, 0, width, height);
        tick += 0.015;

        for (let i = 0; i < petals.length; i++) {
          const p = petals[i];
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(tick + i) * 0.6;
          p.angle += p.spinSpeed;
          p.flip += p.flipSpeed;

          // Wrap around screen
          if (p.y > height + 20) {
            petals[i] = createPetal(-20);
          }
          if (p.x < -20) p.x = width + 10;
          if (p.x > width + 20) p.x = -10;

          drawPetal(p);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className || "absolute inset-0 w-full h-full pointer-events-none z-10"}
      aria-hidden="true"
    />
  );
}
