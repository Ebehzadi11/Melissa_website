"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** A thin editorial rule that draws itself in from the left as it enters view. */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto max-w-[1180px] px-6 md:px-10", className)}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
        className="h-px origin-left bg-taupe/50"
      />
    </div>
  );
}
