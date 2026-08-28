"use client";

import Image from "next/image";
import { about, aboutImage, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { DandelionSeeds } from "@/components/ui/DandelionSeeds";

export function About() {
  const { locale } = useLocale();
  return (
    <section
      id="sobre"
      className="relative overflow-hidden px-6 py-28 md:px-10 md:py-36"
    >
      <DandelionSeeds />
      <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="relative aspect-[5/6] overflow-hidden rounded-sm bg-mist">
          <Image
            src={aboutImage.src}
            alt={t(locale, aboutImage.alt)}
            width={aboutImage.width}
            height={aboutImage.height}
            sizes="(max-width: 768px) 90vw, 560px"
            className="h-full w-full object-cover"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <span className="eyebrow mb-4 block">{t(locale, about.eyebrow)}</span>
          <h2 className="mb-6 text-[clamp(28px,3.6vw,44px)] leading-[1.1]">
            {t(locale, about.title)}
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-inksoft">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{t(locale, p)}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
