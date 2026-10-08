"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Translation } from "@/data/translations";
import type { Language } from "@/types/language";

const cvFiles: Record<Language, string> = {
  en: "/cv/CV_Anastasiia_Totska_en.pdf",
  de: "/cv/CV_Anastasiia_Totska_de.pdf",
  ua: "/cv/CV_Anastasiia_Totska_ua.pdf",
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  cvHref: string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = language === "ua" ? "uk" : language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language], cvHref: cvFiles[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
