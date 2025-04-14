import { render, screen } from "@testing-library/react";
import { FinalCTASection } from "./final-cta-section";
import { useTranslations } from "@/hooks/use-translations";
import { setupTests, TestWrapper } from "@/test-utils";

jest.mock("@/hooks/use-translations", () => ({
  useTranslations: () => ({
    t: (key: string) => {
      const mockTranslations = {
        "cta.title": "Test Title",
        "cta.paragraph1": "Test Paragraph 1",
        "cta.paragraph2": "Test Paragraph 2",
        "cta.button": "Test Button",
      };
      return mockTranslations[key as keyof typeof mockTranslations];
    },
    locale: "en",
  }),
}));

describe("FinalCTASection", () => {
  beforeEach(() => {
    setupTests("/en");
  });

  it("renders the section with translated content", () => {
    render(<FinalCTASection />, { wrapper: TestWrapper });

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Paragraph 1")).toBeInTheDocument();
    expect(screen.getByText("Test Paragraph 2")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("renders the CTA button with correct attributes", () => {
    render(<FinalCTASection />, { wrapper: TestWrapper });

    const link = screen.getByRole("link");
    expect(link.className).toContain("bg-[#047857]");
    expect(link.className).toContain("mx-auto");
    expect(link.className).toContain("mt-8");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute(
      "href",
      "https://sendbot.chat/valdery-alves-en"
    );
  });

  it("renders the FileText icon in the button", () => {
    render(<FinalCTASection />, { wrapper: TestWrapper });

    const icon = screen.getByTestId("file-text-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass(
      "lucide",
      "lucide-file-text",
      "h-4",
      "w-4",
      "sm:h-5",
      "sm:w-5"
    );
  });

  it("renders the grid pattern background", () => {
    render(<FinalCTASection />, { wrapper: TestWrapper });

    const gridPattern = screen.getByTestId("grid-pattern");
    expect(gridPattern).toBeInTheDocument();
    expect(gridPattern.className).toContain("grid-pattern");
  });

  it("renders Portuguese URL when on root path", () => {
    setupTests("/");
    render(<FinalCTASection />, { wrapper: TestWrapper });

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://sendbot.chat/valdery-alves");
  });
});
