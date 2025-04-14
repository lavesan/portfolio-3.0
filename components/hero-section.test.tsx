import { render, screen } from "@testing-library/react";
import { HeroSection } from "./hero-section";
import { setupTests, TestWrapper } from "@/test-utils";

jest.mock("@/hooks/use-translations", () => ({
  useTranslations: () => ({
    t: (key: string) => {
      const mockTranslations = {
        "hero.subtitle":
          "Senior developer focused on performance, structure, and real results.",
        "hero.cta": "Contact",
      };
      return mockTranslations[key as keyof typeof mockTranslations];
    },
    locale: "en",
  }),
}));

describe("HeroSection", () => {
  beforeEach(() => {
    setupTests("/en");
  });

  it("renders hero section", () => {
    render(<HeroSection />, { wrapper: TestWrapper });

    // Check title sections using regex to handle whitespace and line breaks
    expect(screen.getByText(/Websites, systems and apps/)).toBeInTheDocument();
    expect(screen.getByText(/scale/)).toBeInTheDocument();
    expect(screen.getByText(/no shortcuts/)).toBeInTheDocument();
    expect(screen.getByText(/no workarounds/)).toBeInTheDocument();

    // Check subtitle
    expect(
      screen.getByText(
        "Senior developer focused on performance, structure, and real results."
      )
    ).toBeInTheDocument();

    // Check CTA button
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      "https://sendbot.chat/valdery-alves-en"
    );
    expect(link.className).toContain("bg-emerald-600");
    expect(link.className).toContain("hero-cta-pulse");
  });

  it("renders hero image with correct attributes", () => {
    render(<HeroSection />, { wrapper: TestWrapper });

    const image = screen.getByRole("img", {
      name: "Dashboard de sistema empresarial",
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/hero.png");
    expect(image.className).toContain("object-cover");
  });
});
