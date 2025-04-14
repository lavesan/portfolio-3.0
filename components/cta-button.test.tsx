import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CTAButton } from "./cta-button";
import { setupTests, TestWrapper } from "@/test-utils";

// Mock window.dataLayer
const mockDataLayer = {
  push: jest.fn(),
};

// Mock window.fbq
const mockFbq = jest.fn();

// Mock window.gtag
const mockGtag = jest.fn();

describe("CTAButton", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Setup window mocks
    global.window = Object.create(window);
    Object.defineProperty(window, "dataLayer", { value: mockDataLayer });
    Object.defineProperty(window, "fbq", { value: mockFbq });
    Object.defineProperty(window, "gtag", { value: mockGtag });
  });

  it("renders with children text", () => {
    setupTests("/");
    render(<CTAButton>Contact Me</CTAButton>, { wrapper: TestWrapper });
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });

  it("uses Portuguese Sendbot URL for default path", () => {
    setupTests("/");
    render(<CTAButton>Contact</CTAButton>, { wrapper: TestWrapper });
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://sendbot.chat/valdery-alves");
  });

  it("uses English Sendbot URL for /en path", () => {
    setupTests("/en");
    render(<CTAButton>Contact</CTAButton>, { wrapper: TestWrapper });
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      "https://sendbot.chat/valdery-alves-en"
    );
  });

  it("tracks click with Google Tag Manager", () => {
    setupTests("/");
    render(<CTAButton>Contact Me</CTAButton>, { wrapper: TestWrapper });

    const button = screen.getByRole("link");
    fireEvent.click(button);

    expect(mockDataLayer.push).toHaveBeenCalledWith({
      event: "cta_click",
      cta_text: "Contact Me",
    });
  });

  it("tracks click with Facebook Pixel", () => {
    setupTests("/");
    render(<CTAButton>Contact Me</CTAButton>, { wrapper: TestWrapper });

    const button = screen.getByRole("link");
    fireEvent.click(button);

    expect(mockFbq).toHaveBeenCalledWith("track", "Lead", {
      content_name: "Contact Me",
    });
  });

  it("tracks click with Google Ads", () => {
    setupTests("/");
    render(<CTAButton>Contact Me</CTAButton>, { wrapper: TestWrapper });

    const button = screen.getByRole("link");
    fireEvent.click(button);

    expect(mockGtag).toHaveBeenCalledWith("event", "conversion", {
      send_to: "AW-16729447971/YEAvCI_XvbgaEKO8nKk-",
      value: 1.0,
      currency: "BRL",
    });
  });

  it("applies custom className", () => {
    setupTests("/");
    render(<CTAButton className="custom-class">Contact</CTAButton>, {
      wrapper: TestWrapper,
    });
    const link = screen.getByRole("link");
    expect(link.className).toContain("custom-class");
  });

  it("adds correct accessibility attributes to link", () => {
    setupTests("/");
    render(<CTAButton>Contact</CTAButton>, { wrapper: TestWrapper });
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders children correctly", () => {
    setupTests("/");
    render(
      <CTAButton>
        <span>Test Content</span>
      </CTAButton>,
      { wrapper: TestWrapper }
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
