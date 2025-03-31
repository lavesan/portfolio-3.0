import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TrustedCompaniesSection } from "@/components/trusted-companies-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";
import { TranslationsProvider } from "@/providers/translations-provider";

export default function EnglishHome() {
  return (
    <TranslationsProvider locale="en">
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <HeroSection />
        <TrustedCompaniesSection />
        <HowItWorksSection />
        <ProjectsSection />
        <AboutSection />
        <FinalCTASection />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
