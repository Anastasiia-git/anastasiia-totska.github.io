"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languageOptions } from "@/types/language";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={styles.switcher} role="group" aria-label={t.languageSwitcher}>
      <Languages className={styles.icon} size={17} aria-hidden="true" />
      {languageOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          className={language === option.code ? styles.active : ""}
          onClick={() => setLanguage(option.code)}
          aria-pressed={language === option.code}
          title={option.label}
        >
          {option.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
