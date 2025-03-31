"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  children: React.ReactNode[]
  className?: string
}

export function Carousel({ children, className }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScrollButtons = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      checkScrollButtons()
      carousel.addEventListener("scroll", checkScrollButtons)
      window.addEventListener("resize", checkScrollButtons)

      return () => {
        carousel.removeEventListener("scroll", checkScrollButtons)
        window.removeEventListener("resize", checkScrollButtons)
      }
    }
  }, [])

  const scrollLeft = () => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth / 2, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 2, behavior: "smooth" })
  }

  return (
    <div className={`relative ${className}`}>
      <div className="carousel" ref={carouselRef}>
        {children.map((child, index) => (
          <div key={index} className="carousel-item p-2">
            {child}
          </div>
        ))}
      </div>

      {canScrollLeft && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm z-10 rounded-full border-primary/30 hover:bg-primary/20 hover:border-primary/50"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}

      {canScrollRight && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm z-10 rounded-full border-primary/30 hover:bg-primary/20 hover:border-primary/50"
          onClick={scrollRight}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

