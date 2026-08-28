"use client";

import { philosophy, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollRevealWords } from "@/components/ui/ScrollRevealWords";

export function Philosophy() {
  const { locale } = useLocale();
  return (
    <section className="px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[820px] text-center">
        <Reveal>
          <h2 className="mb-10 text-[clamp(32px,4.6vw,56px)] leading-[1.06]">
            {t(locale, philosophy.title)}
          </h2>
          <div className="space-y-2">
            {philosophy.lines.map((line, i) => (
              <p key={i} className="font-serif text-[22px] italic text-inksoft">
                {t(locale, line)}
              </p>
            ))}
          </div>
        </Reveal>

        {/* scroll-scrubbed statement — words populate as you scroll through it */}
        <ScrollRevealWords
          text={t(locale, philosophy.closing)}
          className="mx-auto mt-12 max-w-[700px] font-serif text-[clamp(22px,3.1vw,34px)] italic leading-[1.35] text-ink"
        />
      </div>
    </section>
  );
}
