"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface UseSlideInViewOptions {
  once?: boolean
  amount?: number
  delay?: number
}

export function useSlideInView(options: UseSlideInViewOptions = {}) {
  const { once = true, amount = 0.3, delay = 0 } = options
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isInView, hasAnimated, delay])

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return {
    ref,
    isInView: isInView || hasAnimated,
    slideVariants,
  }
}

