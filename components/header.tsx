"use client";

import { CTAButton } from "./cta-button";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect } from "react";
import { useTranslations } from "@/hooks/use-translations";
import { FileText } from "lucide-react";

export function Header() {
  const { t } = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Ajuste para compensar a altura do header
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md py-2 shadow-md border-b border-border/20"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="#" className="text-lg font-bold">
              Valdery Alves
            </a>

            <nav className="hidden md:flex gap-5">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("header.about")}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("header.projects")}
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <CTAButton
              typebotUrl="https://typebot.io/seu-typebot"
              className="py-1 sm:py-1.5 px-2 sm:px-3 text-xs sm:text-sm bg-[#047857] hover:bg-[#047857]/90"
            >
              <span className="flex items-center gap-1 sm:gap-1.5">
                <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span className="hidden xs:inline">{t("header.contact")}</span>
                <span className="xs:hidden">Contato</span>
              </span>
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
