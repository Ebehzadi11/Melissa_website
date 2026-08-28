import type { CSSProperties } from "react";

/**
 * Dandelion seeds drifting gently down through the About section — a soft,
 * organic ambient effect. Pure SVG/CSS; disabled under reduced motion.
 */

// round so server and client render identical coordinate strings (no hydration mismatch)
const r2 = (n: number) => Math.round(n * 100) / 100;

/** A single dandelion seed: fluffy pappus of filaments, a stalk, and the seed. */
function Seed({ width }: { width: number }) {
  const cx = 12;
  const cy = 12;
  const radius = 10;
  const count = 11;
  const spread = 1.65; // radians each side of straight-up

  const filaments = Array.from({ length: count }, (_, i) => {
    const a = -spread + (i / (count - 1)) * spread * 2;
    return {
      x: r2(cx + Math.sin(a) * radius),
      y: r2(cy - Math.cos(a) * radius),
    };
  });

  return (
    <svg
      viewBox="0 0 24 44"
      fill="none"
      aria-hidden
      style={{ width, height: "auto", display: "block" }}
    >
      {filaments.map((f, i) => (
        <g key={i}>
          <line
            x1={cx}
            y1={cy}
            x2={f.x}
            y2={f.y}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <circle cx={f.x} cy={f.y} r="0.7" fill="currentColor" />
        </g>
      ))}
      {/* stalk */}
      <line
        x1={cx}
        y1={cy}
        x2={cx}
        y2="35"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      {/* seed body */}
      <ellipse cx={cx} cy="37.5" rx="1.1" ry="2.4" fill="currentColor" />
    </svg>
  );
}

// negative delays start some seeds mid-fall so the effect is present on load
const SEEDS = [
  { left: "12%", width: 20, delay: "-4s", duration: "16s", opacity: 0.85 },
  { left: "26%", width: 15, delay: "-11s", duration: "20s", opacity: 0.7 },
  { left: "40%", width: 23, delay: "-2s", duration: "18s", opacity: 0.9 },
  { left: "54%", width: 16, delay: "-8s", duration: "21s", opacity: 0.75 },
  { left: "67%", width: 19, delay: "-14s", duration: "17s", opacity: 0.85 },
  { left: "80%", width: 14, delay: "-6s", duration: "22s", opacity: 0.7 },
  { left: "91%", width: 18, delay: "-9s", duration: "19s", opacity: 0.8 },
];

export function DandelionSeeds() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {SEEDS.map((s, i) => (
        <span
          key={i}
          className="dandelion"
          style={
            {
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
              "--dandelion-opacity": s.opacity,
            } as CSSProperties
          }
        >
          <Seed width={s.width} />
        </span>
      ))}
    </div>
  );
}
