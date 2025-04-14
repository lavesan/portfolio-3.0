require("@testing-library/jest-dom");

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

// Mock window.dataLayer
global.window.dataLayer = {
  push: jest.fn(),
};

// Mock window.fbq
global.window.fbq = jest.fn();

// Mock window.gtag
global.window.gtag = jest.fn();
