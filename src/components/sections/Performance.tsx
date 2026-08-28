"use client";

import Image from "next/image";
import { performance, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function Performance() {
  const { locale } = useLocale();
  return (
    <section className="bg-ink px-6 py-28 text-offwhite md:px-10 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <h2 className="text-[clamp(28px,3.8vw,46px)]">
            {t(locale, performance.title)}
          </h2>
          <span className="hidden select-none font-serif text-[clamp(34px,6vw,80px)] leading-none text-offwhite/15 sm:block">
            Nº 03
          </span>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {performance.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-sm bg-ink/60">
                <Image
                  src={item.image.src}
                  alt={t(locale, item.image.alt)}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-editorial)] hover:scale-[1.04]"
                />
              </div>
              <h3 className="mb-2 text-[24px]">{t(locale, item.title)}</h3>
              <p className="text-[15px] leading-relaxed text-offwhite/70">
                {t(locale, item.body)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
