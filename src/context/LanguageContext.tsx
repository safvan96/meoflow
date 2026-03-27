"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { translations, Language, TranslationEntry } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LANG_STORAGE_KEY = "meoflow-lang";
const DEFAULT_LANG: Language = "tr";
const VALID_LANGS: Language[] = ["tr", "en", "ar", "ru", "zh", "az"];

// Map country codes to languages for geo-detection
const countryToLang: Record<string, Language> = {
  TR: "tr",
  IQ: "ar", SA: "ar", AE: "ar", KW: "ar", QA: "ar", BH: "ar", OM: "ar",
  EG: "ar", JO: "ar", LB: "ar", SY: "ar", YE: "ar", LY: "ar", TN: "ar",
  DZ: "ar", MA: "ar", SD: "ar", PS: "ar",
  RU: "ru", BY: "ru", KZ: "ru", KG: "ru", TJ: "ru", UZ: "ru", TM: "ru",
  CN: "zh", TW: "zh", HK: "zh", MO: "zh", SG: "zh",
  AZ: "az",
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANG);
  const [mounted, setMounted] = useState(false);

  // Load saved language or detect from geolocation
  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY) as Language | null;
    if (stored && VALID_LANGS.includes(stored)) {
      setLangState(stored);
      setMounted(true);
      return;
    }

    // No saved preference - detect from IP geolocation
    fetch("https://ipapi.co/country/", { signal: AbortSignal.timeout(3000) })
      .then((res) => res.text())
      .then((countryCode) => {
        const detected = countryToLang[countryCode.trim().toUpperCase()];
        if (detected) {
          setLangState(detected);
          localStorage.setItem(LANG_STORAGE_KEY, detected);
        }
      })
      .catch(() => {
        // Fallback: try browser language
        const browserLang = navigator.language.split("-")[0] as Language;
        if (VALID_LANGS.includes(browserLang)) {
          setLangState(browserLang);
        }
      })
      .finally(() => setMounted(true));
  }, []);

  // Persist language choice & update html attributes
  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  }, []);

  // Set initial html attributes after mount
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [mounted, lang]);

  // Translation function
  const t = useCallback(
    (key: string): string => {
      const entry: TranslationEntry | undefined = translations[key];
      if (!entry) return key;
      return entry[lang] || entry.tr || key;
    },
    [lang]
  );

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
