"use client";

import { useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({ solid }: { solid: boolean }) {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className={cn(
        "flex items-center gap-1 text-[11px] tracking-[0.14em] font-sans transition-colors",
        solid ? "text-ink" : "text-ink/80",
      )}
      role="group"
      aria-label="Language"
    >
      {(["pt", "en"] as const).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="opacity-40 mr-1">/</span>}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={cn(
              "uppercase transition-opacity hover:opacity-100",
              locale === l ? "opacity-100 underline underline-offset-4" : "opacity-55",
            )}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
