"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolio, portfolioImages, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";

export function Portfolio() {
  const { locale } = useLocale();
  const [index, setIndex] = useState<number | null>(null);
  const featured = portfolioImages.slice(0, portfolio.featuredCount);

  return (
    <section id="portfolio" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-[clamp(30px,4vw,50px)]">
            {t(locale, portfolio.title)}
          </h2>
          <span className="select-none font-serif text-[clamp(34px,6vw,80px)] leading-none text-taupe/25">
            Nº 01
          </span>
        </Reveal>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {featured.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 0.06} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={t(locale, img.alt)}
                className="group relative block w-full overflow-hidden rounded-sm bg-mist"
              >
                <Image
                  src={img.src}
                  alt={t(locale, img.alt)}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  style={{ objectPosition: img.objectPosition ?? "center" }}
                  className="h-auto w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 font-sans text-[12px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-petrol"
          >
            {t(locale, portfolio.seeMore)}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>

      <Lightbox
        images={featured}
        index={index}
        onChange={setIndex}
        locale={locale}
      />
    </section>
  );
}
