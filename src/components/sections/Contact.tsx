"use client";

import { brand, mailtoUrl, t, whatsappUrl } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

const socials = (locale: "pt" | "en") => [
  { label: "Instagram", href: brand.instagram, external: true },
  { label: "LinkedIn", href: brand.linkedin, external: true },
  { label: "WhatsApp", href: whatsappUrl, external: true },
  { label: locale === "pt" ? "E-mail" : "Email", href: mailtoUrl, external: false },
];

export function Contact() {
  const { locale } = useLocale();
  return (
    <section id="contato" className="bg-ink px-6 py-32 text-offwhite md:px-10 md:py-40">
      <Reveal className="mx-auto max-w-[1180px] text-center">
        <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.26em] text-champagne">
          {t(locale, brand.role)}
        </div>
        <h2 className="text-[clamp(38px,6vw,80px)]">{brand.name}</h2>
        <div className="mt-3 font-sans text-[11px] uppercase tracking-[0.26em] text-offwhite/60">
          {t(locale, brand.location)}
        </div>
        <nav
          aria-label="Redes sociais e contato"
          className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {socials(locale).map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener" : undefined}
              className="font-sans text-[14px] tracking-[0.08em] text-offwhite/85 transition-colors hover:text-champagne"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </Reveal>
    </section>
  );
}
