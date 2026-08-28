"use client";

/**
 * Small, editorial line-art glyphs — one signature animation per service row.
 * Outlines "draw on" when the row scrolls into view (motion pathLength), with a
 * subtle ambient loop (breathe / pulse / rotate / twinkle) so they stay alive.
 * Champagne + petrol only, to match the brand. Hidden on mobile in Services.
 */
import { motion } from "motion/react";

const PETROL = "#1B4965";
const CHAMP = "#C9B79C";
const EASE = [0.22, 0.61, 0.36, 1] as const;
const r2 = (n: number) => Math.round(n * 100) / 100;

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 1.1, ease: EASE } },
};

const spin = { transformBox: "fill-box", transformOrigin: "center" } as const;

const svgBase = {
  width: 66,
  height: 66,
  viewBox: "0 0 72 72",
  fill: "none",
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: false, amount: 0.5 },
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// 01 — Commercial Model: a camera whose lens keeps focusing
function Camera() {
  return (
    <motion.svg {...svgBase} aria-hidden>
      <motion.path
        d="M13 26h8l4-5h22l4 5h8a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V29a3 3 0 0 1 3-3Z"
        stroke={PETROL}
        strokeWidth={2}
        variants={draw}
      />
      <motion.circle cx="36" cy="41" r="11" stroke={PETROL} strokeWidth={2} variants={draw} />
      <motion.circle
        cx="36"
        cy="41"
        r="5"
        stroke={CHAMP}
        strokeWidth={2}
        style={spin}
        animate={{ scale: [1, 1.28, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// 02 — UGC & Content: a play mark with live "recording" rings
function Play() {
  return (
    <motion.svg {...svgBase} aria-hidden>
      {[0, 1].map((i) => (
        <motion.circle
          key={i}
          cx="36"
          cy="36"
          r="15"
          stroke={CHAMP}
          strokeWidth={1.5}
          style={spin}
          animate={{ scale: [0.7, 1.7], opacity: [0.55, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: i * 1.4, ease: "easeOut" }}
        />
      ))}
      <motion.circle cx="36" cy="36" r="18" stroke={PETROL} strokeWidth={2} variants={draw} />
      <motion.path d="M31 28l15 8-15 8V28Z" stroke={PETROL} strokeWidth={2} variants={draw} />
    </motion.svg>
  );
}

// 03 — Lifestyle: a rising sun with slowly turning rays over a horizon
const RAYS = Array.from({ length: 8 }, (_, i) => {
  const a = (Math.PI * 2 * i) / 8;
  return {
    x1: r2(36 + Math.cos(a) * 13),
    y1: r2(30 + Math.sin(a) * 13),
    x2: r2(36 + Math.cos(a) * 19),
    y2: r2(30 + Math.sin(a) * 19),
  };
});
function Sun() {
  return (
    <motion.svg {...svgBase} aria-hidden>
      <motion.g style={spin} animate={{ rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }}>
        {RAYS.map((ray, i) => (
          <motion.line
            key={i}
            x1={ray.x1}
            y1={ray.y1}
            x2={ray.x2}
            y2={ray.y2}
            stroke={CHAMP}
            strokeWidth={2}
            variants={draw}
          />
        ))}
      </motion.g>
      <motion.circle cx="36" cy="30" r="9" stroke={PETROL} strokeWidth={2} variants={draw} />
      <motion.path d="M10 54h52" stroke={PETROL} strokeWidth={2} variants={draw} />
      <motion.path d="M18 60h36" stroke={CHAMP} strokeWidth={2} variants={draw} />
    </motion.svg>
  );
}

// 04 — Beauty & Fashion: a four-point sparkle that twinkles
function Sparkle() {
  return (
    <motion.svg {...svgBase} aria-hidden>
      <motion.g
        style={spin}
        animate={{ scale: [1, 1.12, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.path
          d="M36 14c2.4 13.6 7.9 19.1 21.5 21.5C43.9 37.9 38.4 43.4 36 57c-2.4-13.6-7.9-19.1-21.5-21.5C28.1 33.1 33.6 27.6 36 14Z"
          stroke={CHAMP}
          strokeWidth={2}
          variants={draw}
        />
      </motion.g>
      <motion.path
        d="M55 15c.9 4.6 2.4 6.1 7 7-4.6.9-6.1 2.4-7 7-.9-4.6-2.4-6.1-7-7 4.6-.9 6.1-2.4 7-7Z"
        stroke={PETROL}
        strokeWidth={1.6}
        style={spin}
        animate={{ scale: [0.6, 1, 0.6], opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </motion.svg>
  );
}

// 05 — Digital Campaigns: a trend line climbing to an arrow, endpoint pulsing
function Trend() {
  return (
    <motion.svg {...svgBase} aria-hidden>
      <motion.path d="M12 58V14" stroke={PETROL} strokeWidth={2} variants={draw} opacity={0.35} />
      <motion.path d="M12 58h48" stroke={PETROL} strokeWidth={2} variants={draw} opacity={0.35} />
      <motion.path d="M16 48l12-10 10 6 18-20" stroke={PETROL} strokeWidth={2} variants={draw} />
      <motion.path d="M47 24h9v9" stroke={PETROL} strokeWidth={2} variants={draw} />
      <motion.circle
        cx="56"
        cy="24"
        r="3.5"
        fill={CHAMP}
        stroke="none"
        style={spin}
        animate={{ scale: [1, 1.7, 1], opacity: [1, 0.4, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

const GLYPHS = [Camera, Play, Sun, Sparkle, Trend];

export function ServiceGlyph({ index }: { index: number }) {
  const Glyph = GLYPHS[index % GLYPHS.length];
  return <Glyph />;
}
