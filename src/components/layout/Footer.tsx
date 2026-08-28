"use client";

import { brand, footer, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="bg-offwhite py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="mb-5 h-0.5 w-9 bg-petrol" />
        <div className="font-serif text-2xl">{brand.name}</div>
        <div className="mt-2 font-sans text-[11px] uppercase tracking-[0.26em] text-petrol">
          {t(locale, brand.role)}
        </div>
        <div className="mt-1 font-sans text-[11px] uppercase tracking-[0.26em] text-stone">
          {t(locale, brand.location)}
        </div>
        <div className="mt-8 font-sans text-[11px] tracking-[0.1em] text-stone">
          {t(locale, footer.copy)}
        </div>
      </div>
    </footer>
  );
}
