"use client";

import Image from "next/image";

export function TrustedCompaniesSection() {
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
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Empresas que confiam no meu trabalho
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-infinite-scroll">
            {/* Primeiro conjunto de logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={128}
                  height={128}
                  className="object-contain [filter:brightness(0)_saturate(100%)_invert(18%)_sepia(90%)_saturate(1000%)_hue-rotate(152deg)_brightness(94%)_contrast(101%)]"
                />
              </div>
            ))}
            {/* Segundo conjunto de logos (para criar o efeito infinito) */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={128}
                  height={128}
                  className="object-contain [filter:brightness(0)_saturate(100%)_invert(18%)_sepia(90%)_saturate(1000%)_hue-rotate(152deg)_brightness(94%)_contrast(101%)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
