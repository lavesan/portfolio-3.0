"use client";

import { usePathname } from "next/navigation";
import { translations, TranslationKey } from "@/lib/translations";

export function useTranslations() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "pt-BR";

  const t = (key: TranslationKey) => {
    return translations[locale][key];
  };

  return { t, locale };
}
