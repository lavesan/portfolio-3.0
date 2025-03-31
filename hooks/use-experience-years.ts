"use client";

import { useEffect, useState } from "react";

export function useExperienceYears(): number {
  const [years, setYears] = useState(0);

  useEffect(() => {
    // Data de início: 1 de outubro de 2018
    const startDate = new Date(2018, 1, 1); // Mês é 0-indexed, então 9 = outubro
    const currentDate = new Date();

    // Calcula a diferença em anos
    let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();

    // Ajusta se ainda não chegamos ao mês/dia de aniversário este ano
    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      yearsDiff--;
    }

    setYears(yearsDiff);
  }, []);

  return years;
}
