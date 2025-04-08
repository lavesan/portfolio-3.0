"use client";

import Image from "next/image";
import { useTranslations } from "@/hooks/use-translations";

export function TrustedCompaniesSection() {
  const { t } = useTranslations();

  const companies = [
    {
      name: "Vivo",
      logo: "/enterprises/vivo.png",
    },
    {
      name: "Sicredi",
      logo: "/enterprises/sicredi-2.png",
    },
    {
      name: "Accenture",
      logo: "/enterprises/accenture-teal.png",
    },
    {
      name: "Njord",
      logo: "/enterprises/njord.png",
    },
    {
      name: "Justa",
      logo: "/enterprises/Logo_Justa.svg",
    },
    {
      name: "Zeropay",
      logo: "/enterprises/zeropay.png",
    },
    {
      name: "DBC",
      logo: "/enterprises/dbc-company.png",
    },
  ];

  return (
    <section className="py-20 futuristic-bg">
      <div className="absolute inset-0 z-0 grid-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {t("trustedCompanies.title")}
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {/* Primeiro conjunto de logos */}
            <div className="flex gap-8 items-center">
              {companies.map((company, index) => (
                <Image
                  key={`first-${index}`}
                  src={company.logo}
                  alt={company.name}
                  width={160}
                  height={160}
                  className={`object-contain ${
                    company.name === "Justa" ||
                    company.name === "Vivo" ||
                    company.name === "Njord"
                      ? "w-[120px] h-[120px]"
                      : "w-[160px] h-[160px]"
                  } [filter:brightness(0)_saturate(100%)_invert(18%)_sepia(90%)_saturate(1000%)_hue-rotate(152deg)_brightness(94%)_contrast(101%)]`}
                />
              ))}
            </div>
            {/* Segundo conjunto de logos (duplicado para loop contínuo) */}
            <div className="flex gap-8 items-center">
              {companies.map((company, index) => (
                <Image
                  key={`second-${index}`}
                  src={company.logo}
                  alt={company.name}
                  width={160}
                  height={160}
                  className={`object-contain ${
                    company.name === "Justa" ||
                    company.name === "Vivo" ||
                    company.name === "Njord"
                      ? "w-[120px] h-[120px]"
                      : "w-[160px] h-[160px]"
                  } [filter:brightness(0)_saturate(100%)_invert(18%)_sepia(90%)_saturate(1000%)_hue-rotate(152deg)_brightness(94%)_contrast(101%)]`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
