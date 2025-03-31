import { TranslationKey, translations } from "@/lib/translations";
import { usePathname } from "next/navigation";

export function useTranslations() {
  const pathname = usePathname();
  const locale = pathname === "/en" ? "en" : "pt-BR";

  function t(key: TranslationKey) {
    return translations[locale][key] || key;
  }

  return { t, locale };
}
