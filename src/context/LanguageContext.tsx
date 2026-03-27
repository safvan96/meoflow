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

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANG);
  const [mounted, setMounted] = useState(false);

  // Load saved language from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY) as Language | null;
    if (
      stored &&
      ["tr", "en", "ar", "ru", "zh", "az", "es"].includes(stored)
    ) {
      setLangState(stored);
    }
    setMounted(true);
  }, []);

  // Persist language choice & update html attributes
  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(LANG_STORAGE_KEY, newLang);

    // Update <html> lang attribute
    document.documentElement.lang = newLang;

    // Set text direction for RTL languages (Arabic)
    if (newLang === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
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
      if (!entry) {
        // Return the key itself as fallback (useful for debugging)
        return key;
      }
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
