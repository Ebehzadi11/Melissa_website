"use client";

import {
  cta,
  mailtoPortfolioUrl,
  mailtoUrl,
  t,
  whatsappUrl,
} from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FrameCorners } from "@/components/ui/Aperture";

export function CTA() {
  const { locale } = useLocale();
  return (
    <section
      id="disponibilidade"
      className="bg-champagne/25 px-6 py-32 md:px-10 md:py-40"
    >
      <Reveal className="relative mx-auto max-w-[720px] px-6 py-10 text-center md:px-12">
        <FrameCorners className="absolute inset-0" />
        <h2 className="mb-5 text-[clamp(32px,4.4vw,52px)] leading-[1.08]">
          {t(locale, cta.title)}
        </h2>
        <p className="mx-auto mb-10 max-w-[520px] text-[16px] leading-relaxed text-inksoft">
          {t(locale, cta.subtitle)}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={mailtoPortfolioUrl} variant="outline" external>
            {t(locale, cta.requestPortfolio)}
          </Button>
          <Button href={whatsappUrl} variant="fill" external>
            {t(locale, cta.whatsapp)}
          </Button>
          <Button href={mailtoUrl} variant="outline" external>
            {t(locale, cta.email)}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
