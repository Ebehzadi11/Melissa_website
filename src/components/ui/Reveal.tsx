"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  /** stagger delay in seconds */
  delay?: number;
  /** distance to travel on the Y axis */
  y?: number;
  as?: "div" | "section" | "li" | "figure" | "article";
};

const EASE = [0.22, 0.61, 0.36, 1] as const;

/** Fade + rise into view once, on scroll. Honors reduced-motion automatically. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  ...rest
}: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
