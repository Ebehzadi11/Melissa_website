import { cn } from "@/lib/utils";

/**
 * Camera-lens / aperture line motif — a quiet nod to photography.
 * Pure SVG, inherits currentColor. Rotates very slowly (disabled for reduced motion).
 */
export function Aperture({
  className,
  spin = true,
}: {
  className?: string;
  spin?: boolean;
}) {
  // round to fixed precision so SSR and client render identical strings
  const r = (n: number) => Math.round(n * 100) / 100;
  const ticks = Array.from({ length: 12 });
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
      className={cn(spin && "spin-slow", className)}
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="50" cy="50" r="3" stroke="currentColor" strokeWidth="0.8" />
      {ticks.map((_, i) => {
        const a = (i / ticks.length) * Math.PI * 2;
        const r1 = 34;
        const r2 = i % 3 === 0 ? 40 : 37;
        return (
          <line
            key={i}
            x1={r(50 + Math.cos(a) * r1)}
            y1={r(50 + Math.sin(a) * r1)}
            x2={r(50 + Math.cos(a) * r2)}
            y2={r(50 + Math.sin(a) * r2)}
            stroke="currentColor"
            strokeWidth="0.6"
          />
        );
      })}
    </svg>
  );
}

/**
 * Viewfinder corner brackets that frame their (relatively positioned) parent.
 */
export function FrameCorners({ className }: { className?: string }) {
  const corner = "absolute h-6 w-6 border-champagne";
  return (
    <span aria-hidden className={cn("pointer-events-none", className)}>
      <span className={cn(corner, "left-0 top-0 border-l border-t")} />
      <span className={cn(corner, "right-0 top-0 border-r border-t")} />
      <span className={cn(corner, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(corner, "bottom-0 right-0 border-b border-r")} />
    </span>
  );
}
