"use client";

import { niche, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function Niche() {
  const { locale } = useLocale();
  return (
    <section className="px-6 py-28 md:px-10 md:py-36">
      <Reveal className="mx-auto max-w-[1180px] text-center">
        <h2 className="mb-10 text-[clamp(28px,3.8vw,46px)]">
          {t(locale, niche.title)}
        </h2>
        <div className="mx-auto flex max-w-[820px] flex-wrap justify-center gap-3">
          {niche.pills.map((pill, i) => (
            <span
              key={i}
              className="rounded-full border border-taupe/60 px-5 py-2.5 font-sans text-[13px] tracking-[0.04em] text-inksoft transition-colors hover:border-petrol hover:text-petrol"
            >
              {t(locale, pill)}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
