"use client";

import Image from "next/image";
import { measurements, measurementsImage, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function Measurements() {
  const { locale } = useLocale();
  return (
    <section className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="relative mx-auto aspect-[9/16] w-full max-w-[380px] overflow-hidden rounded-sm bg-mist">
          <Image
            src={measurementsImage.src}
            alt={t(locale, measurementsImage.alt)}
            width={measurementsImage.width}
            height={measurementsImage.height}
            sizes="(max-width: 768px) 90vw, 380px"
            className="h-full w-full object-cover"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-[clamp(28px,3.6vw,44px)]">
            {t(locale, measurements.title)}
          </h2>
          <h3 className="mb-8 mt-1 font-serif text-[18px] italic text-stone">
            {t(locale, measurements.subtitle)}
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {measurements.items.map((item, i) => (
              <div
                key={i}
                className={item.wide ? "col-span-2 border-t border-taupe/40 pt-4" : "border-t border-taupe/40 pt-4"}
              >
                <span className="block font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
                  {t(locale, item.label)}
                </span>
                <span className="mt-1 block font-serif text-[22px]">
                  {t(locale, item.value)}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
