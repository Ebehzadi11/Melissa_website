"use client";

import { useRef, useState } from "react";
import { videos, videosSection, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Aperture } from "@/components/ui/Aperture";

function VideoCard({ index }: { index: number }) {
  const { locale } = useLocale();
  const video = videos[index];
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    ref.current?.play();
    setPlaying(true);
  };

  return (
    <Reveal delay={index * 0.08}>
      <div className="group relative aspect-[9/13] overflow-hidden rounded-sm bg-ink">
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          controls={playing}
          preload="none"
          playsInline
          aria-label={t(locale, video.ariaLabel)}
          onPause={() => setPlaying(false)}
          className="h-full w-full object-cover"
        />
        {!playing && (
          <button
            type="button"
            onClick={play}
            aria-label={`${locale === "pt" ? "Reproduzir" : "Play"} — ${t(locale, video.label)}`}
            className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors group-hover:bg-ink/30"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/20 backdrop-blur-sm transition-transform group-hover:scale-110">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="white" aria-hidden>
                <path d="M0 0l20 11L0 22V0z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <h4 className="mt-4 font-sans text-[12px] uppercase tracking-[0.2em] text-stone">
        {t(locale, video.label)}
      </h4>
    </Reveal>
  );
}

export function Videos() {
  const { locale } = useLocale();
  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-ink px-6 py-28 text-offwhite md:px-10 md:py-36"
    >
      {/* lens/aperture motif — subtle photography nod */}
      <Aperture
        className="pointer-events-none absolute -right-10 top-10 h-72 w-72 text-champagne/25 md:h-96 md:w-96"
      />
      <div className="relative mx-auto max-w-[1180px]">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <div>
            <span className="mb-4 block font-sans text-[12px] uppercase tracking-[0.22em] text-champagne">
              {t(locale, videosSection.eyebrow)}
            </span>
            <h2 className="max-w-[18ch] text-[clamp(28px,3.8vw,46px)] leading-[1.1]">
              {t(locale, videosSection.title)}
            </h2>
          </div>
          <span className="hidden select-none font-serif text-[clamp(34px,6vw,80px)] leading-none text-offwhite/15 sm:block">
            Nº 02
          </span>
        </Reveal>
        <div className="mx-auto grid max-w-[560px] gap-6 sm:max-w-[900px] sm:grid-cols-2 sm:gap-8">
          {videos.map((_, i) => (
            <VideoCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
