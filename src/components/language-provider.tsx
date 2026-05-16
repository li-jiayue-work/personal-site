"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Lang, type Dict, defaultLang, getDict } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  t: Dict;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: getDict(lang), toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
