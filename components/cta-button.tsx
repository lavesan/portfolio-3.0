"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
  typebotUrl: string
}

export function CTAButton({ children, className, typebotUrl }: CTAButtonProps) {
  const handleClick = () => {
    // Track event with Google Tag Manager
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "cta_click",
        cta_text: typeof children === "string" ? children : "CTA Button",
      })
    }

    // Track event with Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: typeof children === "string" ? children : "CTA Button",
      })
    }

    // Redirect to Typebot
    window.open(typebotUrl, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      className={`relative bg-accent hover:bg-accent/90 text-white px-4 sm:px-6 py-2 sm:py-6 rounded-md text-sm sm:text-lg transition-all duration-300 ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </Button>
  )
}

