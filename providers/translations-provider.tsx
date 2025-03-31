"use client";

import { createContext, useContext, type ReactNode } from "react";
import {
  type Locale,
  type TranslationKey,
  translations,
} from "@/lib/translations";

type TranslationsContextType = {
  t: (key: TranslationKey) => string;
  locale: Locale;
};

const TranslationsContext = createContext<TranslationsContextType | undefined>(
  undefined
);

export function TranslationsProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  function t(key: TranslationKey) {
    return translations[locale][key] || key;
  }

  return (
    <TranslationsContext.Provider value={{ t, locale }}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error(
      "useTranslations must be used within a TranslationsProvider"
    );
  }
  return context;
}
