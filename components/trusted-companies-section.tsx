"use client";

import { AnimatedSection } from "./animated-section";
import { useTranslations } from "@/hooks/use-translations";

export function TrustedCompaniesSection() {
  const { t } = useTranslations();

  const companies = [
    { name: "Vivo", logo: "/enterprises/vivo.png" },
    { name: "Sicredi", logo: "/enterprises/sicredi-2.png" },
    { name: "Accenture", logo: "/enterprises/accenture-teal.png" },
    { name: "Njord", logo: "/enterprises/njord.png" },
    { name: "Justa", logo: "/enterprises/Logo_Justa.svg" },
    { name: "Zeropay", logo: "/enterprises/zeropay.png" },
  ];

  // Duplicate companies array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-10 futuristic-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0 grid-pattern"></div>
      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <h3 className="text-center text-lg font-medium mb-8">
            {t("trustedCompanies.title")}
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 ${
                    company.name === "Accenture" || company.name === "Sicredi"
                      ? "h-40 w-96"
                      : company.name === "Justa"
                      ? "h-12 w-32"
                      : "h-24 w-56"
                  }`}
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate again for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`duplicate-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 ${
                    company.name === "Accenture" || company.name === "Sicredi"
                      ? "h-40 w-96"
                      : company.name === "Justa"
                      ? "h-12 w-32"
                      : "h-24 w-56"
                  }`}
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
