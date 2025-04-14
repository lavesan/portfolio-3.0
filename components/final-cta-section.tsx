"use client";

import { CTAButton } from "./cta-button";
import { useTranslations } from "@/hooks/use-translations";
import { FileText } from "lucide-react";
import { AnimatedSection } from "./animated-section";

export function FinalCTASection() {
  const { t } = useTranslations();

  return (
    <section className="py-20 futuristic-bg">
      <div
        className="absolute inset-0 z-0 grid-pattern"
        data-testid="grid-pattern"
      ></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {t("cta.title")}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-lg mb-6 text-muted-foreground">
              {t("cta.paragraph1")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg mb-10 text-muted-foreground">
              {t("cta.paragraph2")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <CTAButton className="mx-auto mt-8 bg-[#047857] hover:bg-[#047857]/90">
              <span className="flex items-center gap-2">
                <FileText
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  data-testid="file-text-icon"
                />
                <span className="text-sm sm:text-base">{t("cta.button")}</span>
              </span>
            </CTAButton>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
