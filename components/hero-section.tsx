"use client";

import { CTAButton } from "./cta-button";
import { useTranslations } from "@/hooks/use-translations";
import { Rocket } from "lucide-react";
import { AnimatedSection } from "./animated-section";

export function HeroSection() {
  const { t, locale } = useTranslations();

  return (
    <section className="relative min-h-[80vh] flex items-center py-12 overflow-hidden futuristic-bg pt-28">
      <div className="absolute inset-0 z-0 grid-pattern"></div>

      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                {locale === "en" ? (
                  <>
                    Websites, systems and{" "}
                    <span className="text-emerald-600">apps</span> designed to{" "}
                    <span className="text-emerald-600">scale</span> efficiently
                    — <span className="text-emerald-600">no shortcuts</span>, no
                    workarounds.
                  </>
                ) : (
                  <>
                    Sites, sistemas e{" "}
                    <span className="text-emerald-600">apps</span> pensados para{" "}
                    <span className="text-emerald-600">escalar</span> com
                    eficiência — sem amadorismo,{" "}
                    <span className="text-emerald-600">sem gambiarra</span>.
                  </>
                )}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="text-base md:text-lg mb-6 text-muted-foreground">
                {t("hero.subtitle")}
              </p>
            </AnimatedSection>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <AnimatedSection delay={300}>
                <CTAButton
                  typebotUrl="https://sendbot.chat/meu-chatbot-tm33byp"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white hero-cta-pulse"
                >
                  <span className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    <span>{t("hero.cta")}</span>
                  </span>
                </CTAButton>
              </AnimatedSection>
            </div>
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
