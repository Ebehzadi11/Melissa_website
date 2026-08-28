/**
 * Faint, slow shooting stars drifting across the hero background.
 * Purely decorative; hidden entirely under prefers-reduced-motion (see globals.css).
 * Positions/timing are fixed (not random) to stay SSR-safe.
 */
// clustered in the top-left, so they appear to streak out from the moon in the corner
const STARS = [
  { top: "4%", left: "5%", width: 110, delay: "0s", duration: "7s" },
  { top: "10%", left: "11%", width: 80, delay: "2.6s", duration: "8.5s" },
  { top: "2%", left: "14%", width: 130, delay: "5.2s", duration: "6.5s" },
  { top: "15%", left: "4%", width: 70, delay: "3.8s", duration: "9s" },
  { top: "8%", left: "15%", width: 95, delay: "7.4s", duration: "7.5s" },
  { top: "18%", left: "9%", width: 85, delay: "9.6s", duration: "8s" },
  { top: "12%", left: "6%", width: 60, delay: "12s", duration: "6.8s" },
];

export function ShootingStars() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {STARS.map((s, i) => (
        <span
          key={i}
          className="shooting-star"
          style={{
            top: s.top,
            left: s.left,
            width: s.width,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}
