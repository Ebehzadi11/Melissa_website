"use client";

import Image from "next/image";
import { manifesto, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  const { locale } = useLocale();
  return (
    <section className="relative overflow-hidden px-6 py-36 md:px-10 md:py-48">
      {/* faded background photograph — a literal "more than an image" */}
      <div aria-hidden className="absolute inset-0 z-0">
        <Image
          src="/media/portfolio/07-studio-beauty-portrait.jpg"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover object-[center_28%] blur-[2px] grayscale-[0.2]"
        />
        {/* strong overlay, fading to solid at top/bottom so it blends into neighbors */}
        <div className="absolute inset-0 bg-gradient-to-b from-offwhite via-offwhite/82 to-offwhite" />
      </div>
      <Reveal className="relative z-10 mx-auto max-w-[1180px] text-center">
        <h2 className="mx-auto mb-8 max-w-[14ch] text-[clamp(30px,4.4vw,52px)] leading-[1.08]">
          {t(locale, manifesto.title)}
        </h2>
        <div className="mx-auto max-w-[640px] space-y-5 text-inksoft">
          {manifesto.paragraphs.map((p, i) => (
            <p key={i} className="text-[17px] leading-relaxed">
              {t(locale, p)}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
