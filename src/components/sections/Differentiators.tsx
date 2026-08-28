"use client";

import { differentiators, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function Differentiators() {
  const { locale } = useLocale();
  return (
    <section className="bg-mist/60 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-14">
        {differentiators.items.map((item, i) => (
          <Reveal key={item.num} delay={i * 0.1}>
            <span
              className="font-sans text-[13px] tracking-[0.1em]"
              style={{ color: i % 2 === 0 ? "var(--color-petrol)" : "var(--color-taupe)" }}
            >
              {item.num}
            </span>
            <h3 className="mb-3 mt-3 text-[26px]">{t(locale, item.title)}</h3>
            <p className="text-[15px] leading-relaxed text-inksoft">
              {t(locale, item.body)}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
