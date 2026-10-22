import React from "react";

export function AlponaCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Corner Outer Flourish */}
      <path
        d="M 6 6 L 65 6 C 50 18, 38 28, 32 45 C 28 56, 26 70, 26 95 L 26 114"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M 12 12 L 52 12 C 40 22, 32 30, 28 42 C 24 52, 22 62, 22 80"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Main Corner Floral / Kalka swirl */}
      <path
        d="M 18 18 Q 38 18 42 38 Q 44 55 28 62 Q 18 48 24 34 Q 30 26 36 28"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Petal arcs */}
      <path
        d="M 48 10 Q 58 20 54 30 Q 46 26 44 14"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M 10 48 Q 20 58 30 54 Q 26 46 14 44"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />

      {/* Alpona Dots & Ornamental Accents */}
      <circle cx="8" cy="8" r="2.5" fill="currentColor" />
      <circle cx="20" cy="8" r="1.5" fill="currentColor" />
      <circle cx="8" cy="20" r="1.5" fill="currentColor" />
      <circle cx="32" cy="8" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="8" cy="32" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="44" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="44" r="1.5" fill="currentColor" opacity="0.6" />

      {/* Center jewel dot */}
      <circle cx="28" cy="28" r="2" fill="currentColor" />
      <circle cx="38" cy="44" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="44" cy="38" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function BengaliKalkaDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Left ornamental flourish line */}
      <path
        d="M 10 20 L 105 20 M 110 20 L 125 20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="25" cy="20" r="2" fill="currentColor" opacity="0.9" />
      <circle cx="45" cy="20" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="65" cy="20" r="1.5" fill="currentColor" opacity="0.7" />

      {/* Left Kalka Leaf */}
      <path
        d="M 115 20 Q 128 10 138 20 Q 128 26 118 20 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />

      {/* Center Bengali Lotus / Crown Motif */}
      <g transform="translate(160, 20)">
        {/* Center Petal */}
        <path
          d="M 0 -14 C 4 -7, 4 -2, 0 4 C -4 -2, -4 -7, 0 -14 Z"
          fill="currentColor"
          fillOpacity="0.9"
        />
        {/* Left Petal */}
        <path
          d="M -2 2 C -8 -6, -14 -4, -13 3 C -10 6, -5 5, -2 2 Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
        {/* Right Petal */}
        <path
          d="M 2 2 C 8 -6, 14 -4, 13 3 C 10 6, 5 5, 2 2 Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
        {/* Base decorative circle and dots */}
        <circle cx="0" cy="5" r="2" fill="currentColor" />
        <circle cx="-6" cy="7" r="1.2" fill="currentColor" opacity="0.8" />
        <circle cx="6" cy="7" r="1.2" fill="currentColor" opacity="0.8" />
      </g>

      {/* Right Kalka Leaf */}
      <path
        d="M 205 20 Q 192 10 182 20 Q 192 26 202 20 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />

      {/* Right ornamental flourish line */}
      <path
        d="M 210 20 L 195 20 M 215 20 L 310 20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="295" cy="20" r="2" fill="currentColor" opacity="0.9" />
      <circle cx="275" cy="20" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="255" cy="20" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function AuspiciousLotus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <g transform="translate(30, 22)">
        {/* Center Petal */}
        <path
          d="M 0 -16 C 5 -8, 5 -2, 0 4 C -5 -2, -5 -8, 0 -16 Z"
          fill="currentColor"
        />
        {/* Left inner petal */}
        <path
          d="M -1 1 C -7 -7, -13 -4, -11 3 C -8 7, -4 5, -1 1 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        {/* Right inner petal */}
        <path
          d="M 1 1 C 7 -7, 13 -4, 11 3 C 8 7, 4 5, 1 1 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        {/* Left outer petal */}
        <path
          d="M -4 3 C -14 -1, -19 6, -12 10 C -7 11, -4 7, -4 3 Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        {/* Right outer petal */}
        <path
          d="M 4 3 C 14 -1, 19 6, 12 10 C 7 11, 4 7, 4 3 Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        {/* Small base bulb */}
        <ellipse cx="0" cy="5" rx="3.5" ry="2" fill="currentColor" />
      </g>
    </svg>
  );
}
