import { ReactNode } from "react";
import { usePathname } from "next/navigation";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    className,
    priority,
    width,
    height,
    ...props
  }: any) => (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...props}
    />
  ),
}));

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock AnimatedSection component
jest.mock("@/components/animated-section", () => ({
  AnimatedSection: ({
    children,
    delay,
    direction,
    className,
  }: {
    children: ReactNode;
    delay?: number;
    direction?: string;
    className?: string;
  }) => <div className={className}>{children}</div>,
}));

// Mock window.gtag
beforeAll(() => {
  Object.defineProperty(window, "gtag", {
    value: jest.fn(),
    writable: true,
  });
});

// Mock window.dataLayer
beforeAll(() => {
  window.dataLayer = window.dataLayer || [];
});

// Mock window.fbq
beforeAll(() => {
  Object.defineProperty(window, "fbq", {
    value: jest.fn(),
    writable: true,
  });
});

// Mock IntersectionObserver
beforeAll(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

export function setupTests(pathname: string = "/") {
  (usePathname as jest.Mock).mockReturnValue(pathname);
}

export function TestWrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
