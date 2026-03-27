"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

interface LanguageOption {
  code: Language;
  flag: string;
  name: string;
}

const languages: LanguageOption[] = [
  { code: "tr", flag: "\u{1F1F9}\u{1F1F7}", name: "T\u00fcrk\u00e7e" },
  { code: "en", flag: "\u{1F1EC}\u{1F1E7}", name: "English" },
  { code: "ar", flag: "\u{1F1F8}\u{1F1E6}", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
  { code: "ru", flag: "\u{1F1F7}\u{1F1FA}", name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
  { code: "zh", flag: "\u{1F1E8}\u{1F1F3}", name: "\u4E2D\u6587" },
  { code: "az", flag: "\u{1F1E6}\u{1F1FF}", name: "Az\u0259rbaycan" },
  { code: "es", flag: "\u{1F1EA}\u{1F1F8}", name: "Espa\u00f1ol" },
];

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors border border-gray-200 hover:border-primary-200"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-base leading-none">{currentLang.flag}</span>
        <span className="hidden sm:inline text-xs">{currentLang.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-1.5 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-[60] animate-in fade-in slide-in-from-top-1 duration-150"
          role="listbox"
          aria-label="Languages"
        >
          {languages.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                setLang(option.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                option.code === lang
                  ? "bg-primary-50 text-primary-700 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              role="option"
              aria-selected={option.code === lang}
            >
              <span className="text-base leading-none">{option.flag}</span>
              <span>{option.name}</span>
              {option.code === lang && (
                <svg
                  className="w-4 h-4 ml-auto text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
