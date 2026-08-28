"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { type ImageAsset, type Locale, t } from "@/content/site";

type Props = {
  images: ImageAsset[];
  /** current photo index, or null when closed */
  index: number | null;
  onChange: (index: number | null) => void;
  locale: Locale;
};

const EASE = [0.22, 0.61, 0.36, 1] as const;

/** Full-screen modal carousel: arrows, keyboard, swipe/drag, counter, looping. */
export function Lightbox({ images, index, onChange, locale }: Props) {
  const isOpen = index !== null;

  const close = useCallback(() => onChange(null), [onChange]);
  const move = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, move]);

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t(locale, images[index].alt)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-6 top-6 z-10 font-sans text-[13px] tracking-[0.12em] text-white/90 hover:text-white"
          >
            {locale === "pt" ? "FECHAR" : "CLOSE"} ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label={locale === "pt" ? "Foto anterior" : "Previous photo"}
            className="absolute left-3 z-10 text-4xl text-white/70 hover:text-white md:left-8"
          >
            ‹
          </button>

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) move(1);
              else if (info.offset.x > 80) move(-1);
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[86vh] w-auto cursor-grab touch-none active:cursor-grabbing"
          >
            <Image
              src={images[index].src}
              alt={t(locale, images[index].alt)}
              width={images[index].width}
              height={images[index].height}
              sizes="90vw"
              draggable={false}
              className="max-h-[86vh] w-auto select-none rounded-sm object-contain"
            />
          </motion.div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label={locale === "pt" ? "Próxima foto" : "Next photo"}
            className="absolute right-3 z-10 text-4xl text-white/70 hover:text-white md:right-8"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-[12px] tracking-[0.18em] text-white/70">
            {index + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
