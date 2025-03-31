"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslations } from "@/hooks/use-translations"

export function LanguageToggle() {
  const { locale, changeLocale } = useTranslations()
  const [mounted, setMounted] = useState(false)

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    changeLocale(locale === "pt-BR" ? "en" : "pt-BR")
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-9 h-9 opacity-0">
        <Globe className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleLanguage} className="w-9 h-9" aria-label="Alternar idioma">
      <Globe className="h-4 w-4" />
      <span className="sr-only">{locale === "pt-BR" ? "Switch to English" : "Mudar para Português"}</span>
    </Button>
  )
}

