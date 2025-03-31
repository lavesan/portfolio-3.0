import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TrustedCompaniesSection } from "@/components/trusted-companies-section";
import { ProjectsSection } from "@/components/projects-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { TranslationsProvider } from "@/providers/translations-provider";

export default function Home() {
  return (
    <TranslationsProvider locale="pt-BR">
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <HeroSection />
        <TrustedCompaniesSection />
        <ProjectsSection />
        <HowItWorksSection />
        <AboutSection />
        <FinalCTASection />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
