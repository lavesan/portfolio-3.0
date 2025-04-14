import { render, screen, fireEvent, act } from "@testing-library/react";
import { Header } from "./header";
import { useTranslations } from "@/hooks/use-translations";
import { setupTests, TestWrapper } from "@/test-utils";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("@/hooks/use-translations", () => ({
  useTranslations: () => ({
    t: (key: string) => {
      const mockTranslations = {
        "header.contact": "Contact",
        "header.about": "About",
        "header.projects": "Projects",
      };
      return mockTranslations[key as keyof typeof mockTranslations];
    },
    locale: "en",
  }),
}));

describe("Header", () => {
  const mockScrollTo = jest.fn();
  const mockAddEventListener = jest.fn();
  const mockRemoveEventListener = jest.fn();

  beforeEach(() => {
    setupTests("/en");
    jest.clearAllMocks();

    // Mock window methods
    global.window.scrollTo = mockScrollTo;
    global.window.addEventListener = mockAddEventListener;
    global.window.removeEventListener = mockRemoveEventListener;

    // Mock element.offsetTop for scroll calculations
    Object.defineProperty(HTMLElement.prototype, "offsetTop", {
      configurable: true,
      value: 100,
    });
  });

  it("renders the header with contact button", () => {
    render(<Header />, { wrapper: TestWrapper });
    const contactButtons = screen.getAllByText("Contact");
    expect(contactButtons.length).toBeGreaterThan(0);
  });

  it("adds scroll event listener on mount", () => {
    render(<Header />, { wrapper: TestWrapper });
    expect(mockAddEventListener).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
  });

  it("removes scroll event listener on unmount", () => {
    const { unmount } = render(<Header />, { wrapper: TestWrapper });
    unmount();
    expect(mockRemoveEventListener).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
  });

  it("updates header style on scroll", () => {
    render(<Header />, { wrapper: TestWrapper });

    // Get the scroll handler
    const scrollHandler = mockAddEventListener.mock.calls[0][1];

    // Simulate scroll
    act(() => {
      global.window.scrollY = 20;
      scrollHandler();
    });

    const header = screen.getByRole("banner");
    expect(header.className).toContain("bg-background/90");
    expect(header.className).toContain("backdrop-blur-md");
  });

  it("renders CTA button with correct attributes", () => {
    render(<Header />, { wrapper: TestWrapper });

    const link = screen.getByRole("link");
    expect(link.className).toContain("bg-[#047857]");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("scrolls to section when navigation link is clicked", () => {
    render(<Header />, { wrapper: TestWrapper });

    // Mock element to scroll to
    const mockElement = document.createElement("div");
    mockElement.id = "about";
    document.getElementById = jest.fn(() => mockElement);

    // Click a navigation link
    const aboutButton = screen.getByRole("button", { name: "About" });
    fireEvent.click(aboutButton);

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 30, // offsetTop (100) - header height adjustment (70)
      behavior: "smooth",
    });
  });
});
