"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { brand, navLinks, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";

export function Nav() {
  const { locale } = useLocale();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Navegação principal"
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 transition-colors duration-300",
          solid
            ? "bg-offwhite/90 backdrop-blur-md shadow-[0_1px_0_rgba(23,23,23,0.08)]"
            : "bg-transparent",
        )}
      >
        <a
          href="#top"
          className={cn(
            "font-serif text-xl tracking-[0.08em] transition-colors",
            "text-ink",
          )}
        >
          {brand.monogram}
        </a>

        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[12px] tracking-[0.12em] uppercase transition-colors hover:text-petrol",
                  solid ? "text-ink" : "text-ink/75",
                )}
              >
                {t(locale, link.label)}
              </a>
            ))}
          </div>

          <LanguageToggle solid={solid} />

          <button
            type="button"
            aria-haspopup="true"
            aria-controls="drawer"
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className={cn(
              "md:hidden flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
              solid ? "border-ink/30" : "border-ink/25",
            )}
          >
            <span className="relative block h-[11px] w-4">
              {[0, 5, 10].map((top, i) => (
                <span
                  key={top}
                  className={cn(
                    "absolute left-0 h-px transition-all bg-ink",
                    i === 1 ? "w-[70%]" : "w-full",
                  )}
                  style={{ top }}
                />
              ))}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-7 bg-ink text-offwhite"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-9 top-7 font-sans text-[13px] tracking-[0.12em]"
            >
              {locale === "pt" ? "FECHAR" : "CLOSE"} ✕
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06 }}
                className="font-serif text-3xl italic opacity-90 transition-colors hover:text-champagne"
              >
                {t(locale, link.label)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
