"use client";

import { marqueeWords, t } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/ui/Marquee";

export function MarqueeBand() {
  const { locale } = useLocale();
  return <Marquee items={marqueeWords.map((w) => t(locale, w))} />;
}
