"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ children, className }: CTAButtonProps) {
  const pathname = usePathname();
  const url =
    pathname === "/en"
      ? "https://sendbot.chat/valdery-alves-en"
      : "https://sendbot.chat/valdery-alves";

  const handleClick = (e: React.MouseEvent) => {
    // Track conversion with Google Ads
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-16729447971/YEAvCI_XvbgaEKO8nKk-",
        value: 1.0,
        currency: "BRL",
      });
    }

    // Track event with Google Tag Manager
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "cta_click",
        cta_text: typeof children === "string" ? children : "CTA Button",
      });
    }

    // Track event with Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: typeof children === "string" ? children : "CTA Button",
      });
    }
  };

  return (
    <Button asChild onClick={handleClick} className={className}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        {children}
      </a>
    </Button>
  );
}
