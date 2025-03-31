"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  type Locale,
  type TranslationKey,
  translations,
} from "@/lib/translations";

// Criar um contexto para as traduções
type TranslationsContextType = {
  t: (key: TranslationKey) => string;
  locale: Locale;
  isTranslated: boolean;
  changeLocale: (newLocale: Locale) => void;
};

const TranslationsContext = createContext<TranslationsContextType | undefined>(
  undefined
);

// Provider que envolverá a aplicação
export function TranslationsProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt-BR");
  const [isTranslated, setIsTranslated] = useState(false);
  const [isManuallySet, setIsManuallySet] = useState(false);
  const [externalLanguage, setExternalLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Só detecta o idioma do navegador se não foi definido manualmente
    if (!isManuallySet) {
      try {
        // Verificar se há uma preferência salva no localStorage
        const savedLocale = localStorage.getItem(
          "preferredLocale"
        ) as Locale | null;

        if (savedLocale && (savedLocale === "pt-BR" || savedLocale === "en")) {
          setLocale(savedLocale);
          setIsManuallySet(true);
        } else {
          // Detectar idioma do navegador
          const browserLang = navigator.language;
          if (browserLang.startsWith("pt")) {
            setLocale("pt-BR");
          } else {
            setLocale("en");
          }
        }
      } catch (e) {
        // Fallback para pt-BR em caso de erro
        setLocale("pt-BR");
      }
    }

    // Detectar Google Translate ou outras ferramentas de tradução
    const detectTranslationTool = () => {
      // Google Translate adiciona elementos com classes específicas
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "childList" && mutation.addedNodes.length) {
            // Verifica se o Google Translate foi ativado
            if (
              document.querySelector(".goog-te-banner-frame") ||
              document.querySelector(".skiptranslate") ||
              document.documentElement.classList.contains("translated-ltr") ||
              document.documentElement.classList.contains("translated-rtl")
            ) {
              setIsTranslated(true);

              // Tenta detectar o idioma para o qual está sendo traduzido
              try {
                const htmlLang = document.documentElement.lang;
                setExternalLanguage(htmlLang);
              } catch (e) {
                console.error("Erro ao detectar idioma externo:", e);
              }

              return;
            }
          }
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    };

    const cleanup = detectTranslationTool();
    return cleanup;
  }, [isManuallySet]);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsManuallySet(true);
    try {
      localStorage.setItem("preferredLocale", newLocale);
    } catch (e) {
      console.error("Erro ao salvar preferência de idioma:", e);
    }
  };

  const t = (key: TranslationKey): string => {
    // Se o site estiver sendo traduzido por uma ferramenta externa
    if (isTranslated) {
      // Se o idioma externo for baseado em português, use português
      if (externalLanguage && externalLanguage.startsWith("pt")) {
        return translations["pt-BR"][key] || key;
      } else {
        // Para outros idiomas, use inglês como base para tradução
        return translations["en"][key] || key;
      }
    }

    // Caso normal, sem tradução externa
    return translations[locale][key] || key;
  };

  const value = { t, locale, isTranslated, changeLocale };

  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  );
}

// Hook para usar as traduções
export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error(
      "useTranslations must be used within a TranslationsProvider"
    );
  }
  return context;
}
