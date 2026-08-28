"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { cn } from "@/lib/utils";

/** Wrap a value into the [min, max) range (for seamless looping). */
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/**
 * Editorial keyword marquee. Drifts slowly on its own; scroll velocity
 * speeds it up and flips its direction to match the way you're scrolling.
 */
export function Marquee({
  items,
  baseVelocity = 1.4,
  className,
}: {
  items: string[];
  baseVelocity?: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // one full sequence, repeated for a seamless loop
  const Sequence = ({ copy }: { copy: number }) => (
    <div className="flex shrink-0 items-center" aria-hidden={copy > 0}>
      {items.map((item, i) => (
        <span key={`${copy}-${i}`} className="flex items-center">
          <span
            className={cn(
              "px-6 font-serif text-[clamp(26px,5vw,52px)] leading-none tracking-tight",
              i % 2 === 1 && "text-outline",
            )}
          >
            {item}
          </span>
          <span className="text-champagne text-[18px]" aria-hidden>
            ✳
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "flex flex-nowrap overflow-hidden whitespace-nowrap border-y border-taupe/30 py-8 select-none",
        className,
      )}
    >
      <motion.div className="flex flex-nowrap" style={{ x }}>
        {[0, 1, 2, 3].map((c) => (
          <Sequence key={c} copy={c} />
        ))}
      </motion.div>
    </div>
  );
}
