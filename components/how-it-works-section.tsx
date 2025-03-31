"use client";

import { useTranslations } from "@/hooks/use-translations";
import { CTAButton } from "./cta-button";
import { AnimatedSection } from "./animated-section";
import {
  ClipboardList,
  CreditCard,
  Users,
  FileText,
  CheckCircle2,
} from "lucide-react";

export function HowItWorksSection() {
  const { t } = useTranslations();

  const steps = [
    {
      icon: ClipboardList,
      title: "Briefing Inicial",
      description: "Você me conta sobre seu negócio e suas necessidades",
      delay: 200,
    },
    {
      icon: CreditCard,
      title: "Pagamento",
      description:
        "Realiza o pagamento de R$ 197 (valor com desconto especial)",
      delay: 300,
    },
    {
      icon: Users,
      title: "Reunião de Alinhamento",
      description:
        "Conversa de 30-40 minutos para conhecer suas dores e objetivos",
      delay: 400,
    },
    {
      icon: FileText,
      title: "Material Detalhado",
      description: "Recebe um documento completo com:",
      items: [
        "Análise técnica do seu cenário ou ideia",
        "Sugestão de tecnologias e arquitetura",
        "Pontos de melhoria ou refatoração",
        "Estimativa de investimento e manutenção",
        "Proposta formal com base no diagnóstico",
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
                Como Funciona
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="text-xl text-muted-foreground">
                Processo simples e direto para transformar sua ideia em
                realidade
              </p>
            </AnimatedSection>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block"></div>

            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={step.delay}>
                <div
                  className={`flex flex-col md:flex-row items-center mb-12 md:mb-16 last:mb-0 relative ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon container */}
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 md:mb-0 md:mx-8 relative z-10">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 text-center md:text-left ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>

                    {step.items && (
                      <ul className="space-y-2 text-left">
                        {step.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Price and CTA */}
          <AnimatedSection delay={800} className="mt-12">
            <div className="bg-accent/10 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl font-bold text-accent">R$ 197</span>
                <span className="text-lg text-muted-foreground line-through">
                  R$ 397
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Preço especial válido até metade de fevereiro!
              </p>
              <CTAButton
                typebotUrl="https://typebot.io/seu-typebot"
                className="bg-accent hover:bg-accent/90"
              >
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span>Começar Agora</span>
                </span>
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
