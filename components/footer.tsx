"use client";

import { useTranslations } from "@/hooks/use-translations";

export function Footer() {
  const { t } = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/20 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Valdery Alves. {t("footer.copyright")}
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/valdery-alves-a32653160/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/lavesan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:contato@valdery.jur@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
