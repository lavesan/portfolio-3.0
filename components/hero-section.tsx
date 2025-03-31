"use client";

import { CTAButton } from "./cta-button";
import { useTranslations } from "@/hooks/use-translations";
import { FileText } from "lucide-react";
import { useExperienceYears } from "@/hooks/use-experience-years";
import { AnimatedSection } from "./animated-section";

export function HeroSection() {
  const { t } = useTranslations();
  const experienceYears = useExperienceYears();

  return (
    <section className="relative min-h-[80vh] flex items-center py-12 overflow-hidden futuristic-bg pt-28">
      <div className="absolute inset-0 z-0 grid-pattern"></div>

      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                {t("hero.title")}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="text-base md:text-lg mb-6 text-muted-foreground">
                {t("hero.subtitle")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <CTAButton
                typebotUrl="https://typebot.io/seu-typebot"
                className="bg-[#047857] hover:bg-[#047857]/90"
              >
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {t("hero.cta")}
                </span>
              </CTAButton>
            </AnimatedSection>
          </div>

          <AnimatedSection
            direction="left"
            delay={200}
            className="mt-8 lg:mt-0"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl glow max-w-md mx-auto lg:max-w-none">
              <img
                src="/hero.png"
                alt="Dashboard de sistema empresarial"
                className="w-full h-auto max-h-[300px] lg:max-h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
