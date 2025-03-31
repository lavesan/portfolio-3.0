"use client";

import { useTranslations } from "@/hooks/use-translations";
import { useExperienceYears } from "@/hooks/use-experience-years";
import { AnimatedSection } from "./animated-section";

export function AboutSection() {
  const { t } = useTranslations();
  const experienceYears = useExperienceYears();

  return (
    <section id="about" className="py-20 futuristic-bg">
      <div className="absolute inset-0 z-0 grid-pattern"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {t("about.title")}
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              <AnimatedSection delay={100}>
                <p className="text-lg text-muted-foreground">
                  {t("about.paragraph1").replace(
                    "8",
                    experienceYears.toString()
                  )}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground">
                  {t("about.paragraph2")}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <p className="text-lg text-muted-foreground">
                  {t("about.paragraph3")}
                </p>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection direction="left" className="flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden border-4 border-primary/20 glow">
              <img
                src="/eu.jpeg"
                alt="Valdery Alves"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
