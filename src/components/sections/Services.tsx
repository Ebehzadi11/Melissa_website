"use client";

import { services, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceGlyph } from "@/components/ui/ServiceGlyph";

export function Services() {
  const { locale } = useLocale();
  return (
    <section className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <h2 className="mb-14 max-w-[16ch] text-[clamp(28px,3.8vw,46px)] leading-[1.1]">
            {t(locale, services.title)}
          </h2>
        </Reveal>

        <div className="divide-y divide-taupe/40 border-y border-taupe/40">
          {services.items.map((item, i) => (
            <Reveal
              key={item.num}
              delay={i * 0.06}
              className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-6 gap-y-3 py-8 md:grid-cols-[72px_240px_minmax(0,1fr)_88px] md:items-center md:gap-10"
            >
              <span className="font-sans text-[13px] tracking-[0.1em] text-petrol md:self-baseline">
                {item.num}
              </span>
              <h3 className="text-[24px] transition-colors group-hover:text-petrol md:self-baseline md:text-[28px]">
                {t(locale, item.title)}
              </h3>
              <p className="col-span-2 max-w-[52ch] text-[15px] leading-relaxed text-inksoft md:col-span-1 md:self-baseline">
                {t(locale, item.body)}
              </p>
              <div className="hidden justify-self-end text-petrol opacity-80 transition-opacity group-hover:opacity-100 md:block">
                <ServiceGlyph index={i} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
