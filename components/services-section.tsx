"use client"

import { CheckCircle } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export function ServicesSection() {
  const { t } = useTranslations()

  const services = ["services.item1", "services.item2", "services.item3", "services.item4", "services.item5"]

  return (
    <section className="py-20 bg-secondary/30 futuristic-bg">
      <div className="absolute inset-0 z-0 grid-pattern"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{t("services.title")}</h2>
            <p className="text-lg mb-8 text-muted-foreground">{t("services.description")}</p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-border/50">
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{t(service)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

