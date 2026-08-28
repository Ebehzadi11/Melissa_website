"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolio, portfolioImages, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";

export function GalleryPage() {
  const { locale } = useLocale();
  const [index, setIndex] = useState<number | null>(null);

  return (
    <main className="px-6 pb-28 pt-32 md:px-10 md:pb-36 md:pt-40">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mb-12">
          <Link
            href="/#portfolio"
            className="mb-8 inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.16em] text-stone transition-colors hover:text-petrol"
          >
            <span>←</span> {t(locale, portfolio.back)}
          </Link>
          <h1 className="text-[clamp(34px,5vw,60px)]">
            {t(locale, portfolio.galleryTitle)}
          </h1>
          <p className="mt-3 max-w-[540px] font-serif text-[18px] italic text-inksoft">
            {t(locale, portfolio.gallerySubtitle)}
          </p>
        </Reveal>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {portfolioImages.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 0.05} className="break-inside-avoid">
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
      </div>

      <Lightbox
        images={portfolioImages}
        index={index}
        onChange={setIndex}
        locale={locale}
      />
    </main>
  );
}
