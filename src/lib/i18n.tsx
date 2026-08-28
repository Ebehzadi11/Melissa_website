"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_LOCALE, type Locale } from "@/content/site";

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
};

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "mo-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // hydrate from storage / browser preference (client only)
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "pt" || stored === "en") {
      setLocaleState(stored);
    } else if (navigator.language && !navigator.language.toLowerCase().startsWith("pt")) {
      setLocaleState("en");
    }
  }, []);

  // reflect on <html lang> and persist
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const toggle = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within LanguageProvider");
  return ctx;
}
