"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { brand, hero, heroImage, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { Moon } from "@/components/ui/Moon";

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function Hero() {
  const { locale } = useLocale();

  // pointer-reactive parallax on the portrait
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), {
    stiffness: 120,
    damping: 18,
  });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), {
    stiffness: 120,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pt-24"
    >
      {/* textured moon cresting out of the top-left corner behind the nav — the stars streak from it */}
      <Moon className="pointer-events-none absolute left-[-110px] top-[-120px] z-0 h-[260px] w-[260px] sm:left-[-170px] sm:top-[-250px] sm:h-[560px] sm:w-[560px] md:h-[620px] md:w-[620px]" />
      <ShootingStars />
      <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_0.95fr] md:gap-[56px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
        >
          <div className="mb-5 h-0.5 w-9 bg-petrol" />
          <div className="mb-4 font-sans text-[12px] uppercase tracking-[0.26em] text-petrol">
            {t(locale, brand.role)}
          </div>
          <h1 className="mb-5 text-[clamp(40px,5.6vw,68px)] uppercase leading-[1.03] tracking-[0.01em]">
            {brand.name}
          </h1>
          <p className="mb-9 max-w-[400px] font-serif text-[21px] italic text-inksoft">
            “{t(locale, brand.tagline)}”
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#portfolio" variant="outline">
              {t(locale, hero.ctaPortfolio)}
            </Button>
            <Button href="#disponibilidade" variant="fill">
              {t(locale, hero.ctaWork)}
            </Button>
          </div>
          <div className="mt-10 font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
            {t(locale, brand.location)}
          </div>
        </motion.div>

        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ perspective: 1000 }}
          className="justify-self-center md:justify-self-end"
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="relative aspect-[3/4] h-[52vh] max-h-[720px] min-h-[360px] w-auto overflow-hidden rounded-sm bg-mist shadow-[0_30px_80px_-40px_rgba(23,23,23,0.55)] sm:h-[64vh] md:h-[76vh]"
          >
            <Image
              src={heroImage.src}
              alt={t(locale, heroImage.alt)}
              width={heroImage.width}
              height={heroImage.height}
              priority
              sizes="(max-width: 768px) 85vw, 520px"
              className="h-full w-full object-cover object-[center_20%]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
