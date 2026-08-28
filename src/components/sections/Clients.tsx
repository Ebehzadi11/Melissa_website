"use client";

import { clients, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function Clients() {
  const { locale } = useLocale();
  return (
    <section className="bg-mist/60 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mb-14 max-w-[720px]">
          <h2 className="mb-4 text-[clamp(28px,3.6vw,44px)] leading-[1.1]">
            {t(locale, clients.title)}
          </h2>
          <p className="text-[17px] italic text-inksoft font-serif">
            {t(locale, clients.subtitle)}
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-3">
          {clients.items.map((item, i) => (
            <div
              key={i}
              className="border-t border-taupe/40 pt-4 font-sans text-[15px] text-inksoft"
            >
              {t(locale, item)}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
