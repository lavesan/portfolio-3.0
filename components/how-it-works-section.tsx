"use client";

import { useTranslations } from "@/hooks/use-translations";
import { CTAButton } from "./cta-button";
import { AnimatedSection } from "./animated-section";
import {
  MessageSquare,
  CreditCard,
  FileText,
  CheckCircle2,
  FileCheck,
  Rocket,
} from "lucide-react";
import { useEffect, useState } from "react";

export interface HowItWorksSectionProps {
  forcedLocale?: "pt-BR" | "en";
}

export function HowItWorksSection({ forcedLocale }: HowItWorksSectionProps) {
  const { t, locale } = useTranslations();
  const isBrazil = forcedLocale ? forcedLocale === "pt-BR" : true;
  const isEnglish = locale === "en";

  const getPromotionEndDate = () => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const daysInMonth = new Date(
      today.getFullYear(),
      currentMonth + 1,
      0
    ).getDate();
    const monthNames = {
      pt: [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
      ],
      en: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };

    let endDay;
    if (currentDay <= Math.floor(daysInMonth / 2)) {
      endDay = Math.floor(daysInMonth / 2);
    } else {
      endDay = daysInMonth;
    }

    const lang = isEnglish ? "en" : "pt";
    return `${endDay} ${lang === "en" ? "of" : "de"} ${
      monthNames[lang][currentMonth]
    }`;
  };

  const formatDescription = (baseText: string) => {
    return `<span class="text-yellow-400">${baseText}</span>`;
  };

  const steps = [
    {
      icon: MessageSquare,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
      delay: 200,
    },
    {
      icon: CreditCard,
      title: t("howItWorks.step2.title"),
      description: isEnglish
        ? `USD 40 (promotional price until ${getPromotionEndDate()})\n\n${formatDescription(
            t("howItWorks.step2.description")
          )}`
        : `R$ 197 (valor promocional até ${getPromotionEndDate()})\n\n${formatDescription(
            t("howItWorks.step2.description")
          )}`,
      delay: 300,
    },
    {
      icon: FileText,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
      items: [
        t("howItWorks.step3.items.analysis"),
        t("howItWorks.step3.items.tech"),
        t("howItWorks.step3.items.improvements"),
        t("howItWorks.step3.items.estimate"),
        t("howItWorks.step3.items.proposal"),
      ],
      delay: 400,
    },
    {
      icon: FileCheck,
      title: t("howItWorks.step4.title"),
      description: t("howItWorks.step4.description"),
      items: [
        t("howItWorks.step4.items.contract"),
        t("howItWorks.step4.items.payment"),
        t("howItWorks.step4.items.start"),
      ],
      delay: 500,
    },
  ];

  return (
    <section className="py-20 futuristic-bg">
      <div className="absolute inset-0 z-0 grid-pattern"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                {t("howItWorks.title")}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="text-xl text-muted-foreground">
                {t("howItWorks.subtitle")}
              </p>
            </AnimatedSection>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <AnimatedSection key={index} delay={step.delay}>
                  <div
                    className={`flex flex-col md:flex-row items-center relative ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Icon container */}
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 md:mb-0 md:mx-8 relative z-10">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border/50 shadow-lg">
                        <h3 className="text-xl font-bold mb-4">{step.title}</h3>

                        <div className="space-y-4">
                          <p
                            className="text-muted-foreground whitespace-pre-line"
                            dangerouslySetInnerHTML={{
                              __html: step.description,
                            }}
                          />

                          {step.items && (
                            <div className="bg-accent/5 rounded-lg p-4">
                              <ul
                                className={`space-y-3 ${
                                  index % 2 === 0 ? "md:text-right" : ""
                                }`}
                              >
                                {step.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className={`flex items-start gap-3 ${
                                      index % 2 === 0
                                        ? "md:flex-row-reverse"
                                        : ""
                                    }`}
                                  >
                                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Price and CTA */}
          <AnimatedSection delay={800} className="mt-12">
            <div className="bg-accent/10 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl font-bold text-accent">
                  {isEnglish ? "USD 40" : "R$ 197"}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  {isEnglish ? "USD 80" : "R$ 397"}
                </span>
              </div>
              <p className="text-sm font-semibold text-yellow-400 animate-pulse mb-2">
                {t("howItWorks.promo.special").replace(
                  "%date%",
                  getPromotionEndDate()
                )}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                {t("howItWorks.promo.discount")}
              </p>
              <CTAButton
                typebotUrl="https://typebot.io/seu-typebot"
                className="bg-accent hover:bg-accent/90"
              >
                <span className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  <span>{t("howItWorks.promo.cta")}</span>
                </span>
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
